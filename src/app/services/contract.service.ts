import { Injectable, NgZone } from '@angular/core';
import { ADDRESS_ZERO, ZERO, MAX_VALUE } from '../constants/various';
import { STAKING, ETHBOX, TOKEN_DISPENSER, ERC20_ABI } from '../constants/abis';
import { chainTokenDictionary } from '../constants/tokens';
import { TokenData, TokenBalance, Box, BoxInputs } from '../interfaces';
import { LoadingIndicatorService } from './loading-indicator.service';
import { ToasterService } from './toaster.service';
import { ConfirmDialogService } from './confirm-dialog.service';
import { ViewConsoleService } from './view-console.service';
import BigNumber from 'bignumber.js';

let { ObsEmitter, ObsCacher } = require("bada55asyncutils");
let SmartInterval = require("smartinterval");
let EthersModal = require("ethersmodal");

// For Coinbase Wallet
import WalletLink from "walletlink";

// For Fortmatic
import Fortmatic from "fortmatic";

// For WalletConnect
import WalletConnectProvider from "@walletconnect/web3-provider";

// For Polkadot Wallet
import * as PolkadotExtensionDapp from "@polkadot/extension-dapp";
import * as ReefDefiEvmProvider from "@reef-defi/evm-provider";
import * as PolkadotApi from "@polkadot/api";

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    APP_NAME = "ethbox";
    INFURA_API_KEY = "b5b51030cf3e451bb523a3f2ca10e3ff";
    FORTMATIC_API_KEY = "pk_test_ADCE42E053643A95";

    // To know more about ObsEmitter, ObsCacher and ObsReplayer see https://github.com/4skinSkywalker/AsyncUtils
    tokens$ = new ObsCacher(null);
    tokensMap;

    // Connection will hold a connection object by EthersModal, see more https://github.com/4skinSkywalker/EthersModal
    connection;
    chainId$ = new ObsCacher(null);; // This is a relayer for connection.chainId$
    selectedAccount$ = new ObsCacher(null);; // This is a relayer for connection.selectedAccount$

    incomingBoxes$ = new ObsCacher(null);
    outgoingBoxes$ = new ObsCacher(null);

    isChainSupported$ = new ObsCacher(false);
    isEthereumMainnet$ = new ObsCacher(false);
    isBinanceMainnet$ = new ObsCacher(false);
    isMaticMainnet$ = new ObsCacher(false);

    isAppReady$ = new ObsCacher(false);
    isStakingReady$ = new ObsCacher(false);

    approvalInteraction$ = new ObsEmitter();
    boxInteraction$ = new ObsEmitter();
    stakingInteraction$ = new ObsEmitter();
    tokenDispenserInteraction$ = new ObsEmitter();

    // These variables are just for the boxes loop, it uses SmartInterval under the hood, to know more see https://github.com/4skinSkywalker/SmartInterval
    private boxesIntervalCycleDelay = 5e3;
    private boxesInterval;

    // These fields are variables initialized by setVariables
    private ethboxAddress;
    private ethboxContract;
    private stakingAddress;
    private stakingContract;
    private tokenDispenserAddress;
    private tokenDispenserContract;

    private em; // This variable holds the instance of EthersModal

    constructor(
        private ngZone: NgZone,
        private loadingIndicatorServ: LoadingIndicatorService,
        private toasterServ: ToasterService,
        private confirmDialogServ: ConfirmDialogService,
        private viewConsoleServ: ViewConsoleService
    ) {
        this.init();
    }

    // Connect the user to the dapp
    // Run on user interaction
    async connect(): Promise<void> {
        this.loadingIndicatorServ.on();
        try {
            await this.em.connect();
        }
        catch (err) {
            this.loadingIndicatorServ.off();
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: err,
                duration: "long"
            });
            throw err;
        }
        this.loadingIndicatorServ.off();
    }

    // Disconnect the user from the dapp
    // Run on user interaction
    async disconnect(): Promise<void> {
        this.em.disconnect();
        this.reset();
    }

    // Setup EthersModal and launch the box interval
    private init(): void {

        let myWallets = EthersModal.providers.array;

        // Setup of Coinbase configurations
        let coinbaseCfg = EthersModal.providers.dictionary.CoinbaseCfg;
        coinbaseCfg.options.appName = this.APP_NAME;
        coinbaseCfg.options.infuraApiKey = this.INFURA_API_KEY;
        coinbaseCfg.package = WalletLink;
        myWallets.push(coinbaseCfg);

        // Setup of Fortmatic configurations
        let fortmaticCfg = EthersModal.providers.dictionary.FortmaticCfg;
        fortmaticCfg.options.fortmaticApiKey = this.FORTMATIC_API_KEY;
        fortmaticCfg.options.infuraApiKey = this.INFURA_API_KEY;
        fortmaticCfg.package = Fortmatic;
        myWallets.push(fortmaticCfg);

        // Setup of WalletConnect configurations
        let walletConnectCfg = EthersModal.providers.dictionary.WalletConnectCfg;
        walletConnectCfg.options.infuraApiKey = this.INFURA_API_KEY;
        walletConnectCfg.package = WalletConnectProvider;
        myWallets.push(walletConnectCfg);

        // Setup of Polkadot configurations
        let polkadotCfg = EthersModal.providers.dictionary.PolkadotCfg;
        polkadotCfg.options.appName = this.APP_NAME;
        polkadotCfg.package = [
            PolkadotExtensionDapp,
            ReefDefiEvmProvider,
            PolkadotApi
        ];
        myWallets.push(polkadotCfg);

        // Instantiate EthersModal and get the connection
        this.em = new EthersModal({
            providerOpts: myWallets,
            cacheProvider: true
        });
        this.connection = this.em.connection;

        // The following code is to setup relayers for retro-compatibility
        this.connection.chainId$
            .subscribe(newChainId => this.chainId$.next(newChainId));
        this.connection.selectedAccount$
            .subscribe(newSelectedAccount => this.selectedAccount$.next(newSelectedAccount));

        // Instantiate SmartInterval for fetching boxes at regular intervals
        this.boxesInterval = new SmartInterval(
            async () => {

                await new Promise((resolve) => {
                    this.ngZone.run(async () => {

                        // "try" is used here because it's expected to see boxes getters to fail from time to time due to network changes
                        try {
                            this.incomingBoxes$.next(await this.getIncomingBoxes());
                            this.outgoingBoxes$.next(await this.getOutgoingBoxes());
                        } catch (err) {
                            console.warn("Box getters failed.");
                        }
                        resolve(1);
                    });
                });
            },
            this.boxesIntervalCycleDelay
        );

        // Force boxes to be fetched on boxInteraction$
        this.boxInteraction$.subscribe(() =>
            this.boxesInterval.forceExecution()
        );

        // Setup automatic fetching of boxes and setting of variables
        this.connection.isConnected$
            .subscribe(() => {
                this.boxesInterval.forceExecution();
                this.setVariables();
            });

        // Automatically connect if there's a cached provider
        // Must defer this because it could run before the provider is injected into the page
        setTimeout(() => {
            if (localStorage.getItem("ETHERS_MODAL_CACHED_PROVIDER")) {
                this.connect();
            }
        }, 3000);
    }

    // Load supported tokens, instantiate contracts and start boxes fetching
    private async setVariables(): Promise<void> {

        if (!this.connection.isConnected$.getValue()) {
            this.reset();
            return;
        }

        // The following code sets contracts depending on the current chain
        // TODO: add reef-mainnet
        let chainId = this.connection.chainId$.getValue();
        switch ((chainId || {}).toString()) {
            case "reef-testnet": // Reef Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.REEF_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.REEF_TESTNET;
                break;
            case "1":     // Ethereum Mainnet
                this.isEthereumMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.ETHEREUM;
                this.stakingAddress = STAKING.ADDRESSES.ETHEREUM;
                break;
            case "4":     // Ethereum Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.ETHEREUM_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.ETHEREUM_TESTNET;
                break;
            case "56":    // Binance Mainnet
                this.isBinanceMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.BINANCE;
                this.stakingAddress = STAKING.ADDRESSES.BINANCE;
                break;
            case "97":    // Binance Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.BINANCE_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.BINANCE_TESTNET;
                break;
            case "137":   // Matic Mainnet
                this.isMaticMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.MATIC;
                break;
            case "80001": // Matic Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.MATIC_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.MATIC_TESTNET;
                break;
            default:
                this.reset();
                throw new Error("Network not recognized.");
        }

        this.ethboxContract = new this.connection.ethers.Contract(
            this.ethboxAddress,
            ETHBOX.ABI,
            this.connection.signer$.getValue()
        );

        if (this.stakingAddress) {
            this.stakingContract = new this.connection.ethers.Contract(
                this.stakingAddress,
                STAKING.ABI,
                this.connection.signer$.getValue()
            );
            this.isStakingReady$.next(true);
        }

        if (this.tokenDispenserAddress) {
            this.tokenDispenserContract = new this.connection.ethers.Contract(
                this.tokenDispenserAddress,
                TOKEN_DISPENSER.ABI,
                this.connection.signer$.getValue()
            );
        }

        this.isChainSupported$.next(true);
        this.isAppReady$.next(true);

        this.viewConsoleServ.log(`Ethbox contract: ${this.ethboxAddress}`);
        this.viewConsoleServ.log(`Staking contract: ${this.stakingAddress}`);

        this.loadTokens();

        // Start the newly created SmartInterval instance
        this.boxesInterval.start();
    }

    // Get custom tokens from LS and merge them with curated ones
    loadTokens() {

        let LSKey = `customTokens${this.connection.chainId$.getValue()}`;

        let customTokens = [],
            curatedTokens = [];

        // Take custom tokens from localStorage and give them the unknown icon
        let customTokensLS = localStorage.getItem(LSKey);
        if (customTokensLS) {
            customTokens = JSON.parse(customTokensLS);
            customTokens.forEach(token => token.thumb = 'assets/img/unknown-icon.png');
        }

        // Take tokens from curated lists for the current network
        let currentChainTokens = chainTokenDictionary[this.connection.chainId$.getValue()];
        if (currentChainTokens) {
            curatedTokens = currentChainTokens;
        }

        let mergedResults = [...customTokens, ...curatedTokens];
        this.tokensMap = mergedResults.reduce((a, b) => (a[b.address] = b, a), {});;
        this.tokens$.next(mergedResults);
    }

    private reset() {
        this.isAppReady$.next(false);
        this.isChainSupported$.next(false);

        this.boxesInterval.stop();
        this.incomingBoxes$.next(null);
        this.outgoingBoxes$.next(null);
        this.tokens$.next(null);

        this.tokenDispenserContract = null;
        this.isStakingReady$.next(false);
        this.stakingContract = null;
        this.ethboxContract = null;

        this.isMaticMainnet$.next(false);
        this.isBinanceMainnet$.next(false);
        this.isEthereumMainnet$.next(false);
    }

    networkInfo(chainId) {
        switch ((chainId || {}).toString()) {
            case "reef-mainnet":
                return {
                    name: "Reef Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
                    accountScannerUrl: (address) => `https://reefscan.com/account/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "reef-testnet":
                return {
                    name: "Reef Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
                    accountScannerUrl: (address) => `https://testnet.reefscan.com/account/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "1":
                return {
                    name: "Ethereum Mainnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
                    accountScannerUrl: (address) => `https://etherscan.io/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "4":
                return {
                    name: "Ethereum Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
                    accountScannerUrl: (address) => `https://rinkeby.etherscan.io/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "56":
                return {
                    name: "Binance Mainnet",
                    baseTokenThumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
                    accountScannerUrl: (address) => `https://bscscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "97":
                return {
                    name: "Binance Testnet",
                    baseTokenThumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
                    accountScannerUrl: (address) => `https://testnet.bscscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "137":
                return {
                    name: "Matic Mainnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
                    accountScannerUrl: (address) => `https://polygonscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "80001":
                return {
                    name: "Matic Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
                    accountScannerUrl: (address) => `https://mumbai.polygonscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            default:
                return {
                    name: "Not supported",
                    baseTokenThumb: null,
                    accountScannerUrl: () => ``,
                    transactionScannerUrl: () => ``
                };
        }
    }

    isEthereum(): boolean {
        return [1, 4].includes(this.connection.chainId$.getValue());
    }

    isBinance(): boolean {
        return [56, 97].includes(this.connection.chainId$.getValue());
    }

    isMatic(): boolean {
        return [137, 80001].includes(this.connection.chainId$.getValue());
    }

    isReef(): boolean {
        return ["reef-testnet", "reef-mainnet"].includes(this.connection.chainId$.getValue());
    }

    isEthereumMainnet(): boolean {
        return this.connection.chainId$.getValue() == 1;
    }

    isBinanceMainnet(): boolean {
        return this.connection.chainId$.getValue() == 56;
    }

    isMaticMainnet(): boolean {
        return this.connection.chainId$.getValue() == 137;
    }

    isReefTestnet(): boolean {
        return this.connection.chainId$.getValue() === "reef-testnet";
    }

    isEthereumTestnet(): boolean {
        return this.connection.chainId$.getValue() == 4;
    }

    isBinanceTestnet(): boolean {
        return this.connection.chainId$.getValue() == 97;
    }

    isMaticTestnet(): boolean {
        return this.connection.chainId$.getValue() == 80001;
    }

    isReefMainnet(): boolean {
        return this.connection.chainId$.getValue() === "reef-mainnet";
    }

    // Give the user 100 of the selected test token
    // State changing operation
    async give100TestToken(testTokenIndex: string) {

        // Start loading
        this.loadingIndicatorServ.on();

        // I decided to refactor the code below and have just the code that can throw exception inside the try/catch block, and to use throw to stop the execution in catch

        // Making of the transaction
        let tx;
        try {
            tx = await this.tokenDispenserContract.giveToken(
                testTokenIndex,
                this.connection.ethers.utils.parseUnits("100", 18)
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Token dispending aborted by user.",
                duration: "long"
            });
            this.viewConsoleServ.error("Token dispensing aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "You have received 100 test tokens!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Received 100 test tokens (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.tokenDispenserInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Check if the given address is syntatically valid
    isValidAddress(address: string): boolean {
        return this.connection.ethers.utils.isAddress(address);
    }

    private hash(string) {
        return this.connection.ethers.utils.id(string);
    }

    private doubleHash(string) {
        return this.connection.ethers.utils.keccak256(this.hash(string));
    }

    // Check if the password provided fits the one that encrypted the box
    isValidPassword(box: Box, password: string): boolean {
        return box.passHashHash === this.doubleHash(password);
    }

    // What about using ethers.utils.formatEthers() instead?
    weiToDecimal(wei: string, decimals: string | number): string {
        let multiplier = "1" + ZERO.repeat(Number(decimals));
        let _wei = new BigNumber(wei);
        return _wei.dividedBy(multiplier).toFixed();
    }

    // What about using ethers.utils.parseUnits() instead?
    decimalToWei(decimalValue: string, decimals: string | number): string {
        let multiplier = "1" + ZERO.repeat(Number(decimals));
        let _decimal = new BigNumber(decimalValue);
        return _decimal.multipliedBy(multiplier).toFixed();
    }

    // Read only query
    private async getWeiAllowance(tokenAddress: string): Promise<string> {

        let tokenContract = new this.connection.ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            this.connection.provider$.getValue()
        );

        let allowance = await tokenContract.allowance(
            this.connection.selectedAccount$.getValue(),
            this.ethboxAddress
        );

        return allowance.toString();
    }

    // Read only query
    async getTokenData(tokenAddress: string): Promise<TokenData> {

        let name, symbol, decimals;
        let thumb = "assets/img/unknown-icon.png";

        // If the token resides in the curated list, then take the data from there
        if (this.tokensMap[tokenAddress]) {
            name = this.tokensMap[tokenAddress].name;
            symbol = this.tokensMap[tokenAddress].symbol;
            decimals = this.tokensMap[tokenAddress].decimals;
            thumb = this.tokensMap[tokenAddress].thumb;
        }
        // Otherwise take the data from the blockchain
        else {

            let tokenContract = new this.connection.ethers.Contract(
                tokenAddress,
                ERC20_ABI,
                this.connection.provider$.getValue()
            );

            decimals = await tokenContract.decimals();
            name = await tokenContract.name();
            symbol = await tokenContract.symbol();
        }

        return {
            address: tokenAddress,
            name,
            symbol,
            decimals,
            thumb
        };

    }

    // Read only query
    async getTokenBalance(tokenAddress: string): Promise<TokenBalance> {

        let tokenData = await this.getTokenData(tokenAddress);
        let selectedAccount = this.connection.selectedAccount$.getValue();

        let wei, weiAllowance;

        // If it's the base token, then mocks the allowance as unlimited (MAX_VALUE)
        if (tokenAddress == ADDRESS_ZERO) {
            wei = (await this.connection.provider$.getValue().getBalance(selectedAccount)).toString();
            weiAllowance = MAX_VALUE;
        }
        else {

            let tokenContract = new this.connection.ethers.Contract(
                tokenAddress,
                ERC20_ABI,
                this.connection.provider$.getValue()
            );

            wei = (await tokenContract.balanceOf(selectedAccount)).toString();
            weiAllowance = await this.getWeiAllowance(tokenAddress);
        }

        return {
            address: tokenAddress,
            wei,
            weiAllowance,
            decimalValue: this.weiToDecimal(wei, tokenData.decimals),
            decimalAllowance: this.weiToDecimal(weiAllowance, tokenData.decimals)
        };
    }

    // Approve unlimited spending for the given address
    // State changing operation
    async approveMax(tokenAddress: string): Promise<void> {

        let tokenContract = new this.connection.ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            this.connection.signer$.getValue()
        );

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await tokenContract.approve(this.ethboxAddress, MAX_VALUE);
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Token approval aborted by user.",
                duration: "long"
            });
            this.viewConsoleServ.error(
                `Approval for unlimited allowance of ${tokenAddress} aborted`
            );

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Approval successful – You can now send / trade this token!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Successfully approved unlimited allowance of ${tokenAddress} (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.approvalInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // It takes the backend data and adapt it to the frontend needs
    // bcBox stands for "blockchain box" while appBox stands for "application box"
    private async bcBox2appBox(bcBox, override) {

        let appBox: any = {}; // I should make a type here
        for (let key in bcBox) {
            if (bcBox.hasOwnProperty(key)) {

                // Filter out numeric keys (why those are there?)
                if (!isNaN(Number(key))) {
                    continue;
                }

                // Evaluate BigNumber(s) to numeric strings in base-10
                // This is just to implement this feature faster as the code migrated from web3 to this.connection.ethers, in future should be refactored to work with BigNumber at all times
                if (bcBox[key]._isBigNumber) {
                    appBox[key] = bcBox[key].toString();
                    continue;
                }
                appBox[key] = bcBox[key];
            }
        }

        Object.assign(appBox, override);

        appBox.readableTimestamp = new Date(appBox.timestamp * 1e3)
            .toLocaleDateString(
                undefined, // Fallbacks to the user's locale
                {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }
            );

        appBox.sendTokenInfo = await this.getTokenData(appBox.sendToken);
        appBox.sendDecimalValue = this.weiToDecimal(
            appBox.sendValue,
            appBox.sendTokenInfo.decimals
        );

        if (appBox.requestToken) {
            appBox.requestTokenInfo = await this.getTokenData(appBox.requestToken);
            appBox.requestDecimalValue = this.weiToDecimal(
                appBox.requestValue,
                appBox.requestTokenInfo.decimals
            );
        } else {
            appBox.requestValue = "0";
        }

        return appBox;
    }

    // Fetch the outgoing boxes (both privacy and non)
    // Read only query
    async getIncomingBoxes(): Promise<Box[]> {

        let boxes = [];

        let normalBoxes = await this.ethboxContract.getBoxesIncoming();
        for (let index of normalBoxes) {

            let appBox = await this.bcBox2appBox(
                await this.ethboxContract.getBox(index),
                {
                    index: index.toString(),
                    hasPrivacy: false,
                    recipientHash: null,
                    senderHash: null
                }
            );

            if (appBox.sender == this.connection.selectedAccount$.getValue()) {
                continue;
            }

            boxes.push(appBox);
        }

        let privacyBoxes = await this.ethboxContract.getBoxesIncomingWithPrivacy();
        for (let index of privacyBoxes) {

            let appBox = await this.bcBox2appBox(
                await this.ethboxContract.getBoxWithPrivacy(index),
                {
                    index: index.toString(),
                    hasPrivacy: true,
                    requestToken: null,
                    requestValue: null
                }
            );

            if (appBox.senderHash == this.hash(this.connection.selectedAccount$.getValue())) {
                continue;
            }

            boxes.push(appBox);
        }

        // Sort boxes by date from newest to oldest
        boxes.sort((a, b) => b.timestamp - a.timestamp);
        window["_incBox"] = boxes;
        // console.log("Incoming boxes", boxes);

        return boxes;
    }

    // Fetch the outgoing boxes (both privacy and non)
    // Read only query
    async getOutgoingBoxes(): Promise<Box[]> {

        let boxes = [];

        let normalBoxes = await this.ethboxContract.getBoxesOutgoing();
        for (let index of normalBoxes) {

            let appBox = await this.bcBox2appBox(
                await this.ethboxContract.getBox(index),
                {
                    index: index.toString(),
                    isPrivacy: false,
                    recipientHash: null,
                    senderHash: null
                }
            );
            boxes.push(appBox);
        }

        let privacyBoxes = await this.ethboxContract.getBoxesOutgoingWithPrivacy();
        for (let index of privacyBoxes) {

            let appBox = await this.bcBox2appBox(
                await this.ethboxContract.getBoxWithPrivacy(index),
                {
                    index: index.toString(),
                    hasPrivacy: true,
                    requestToken: null,
                    requestValue: null
                }
            );
            boxes.push(appBox);
        }

        // Sort boxes by date from newest to oldest
        boxes.sort((a, b) => b.timestamp - a.timestamp);
        window["_outBox"] = boxes;
        // console.log("Outgoing boxes", boxes);

        return boxes;
    }

    // Make a box
    // State changing operation
    async createBox(boxInputs: BoxInputs): Promise<void> {

        // Double hash the password
        let passHashHash = this.doubleHash(boxInputs.password);

        // Get send token details
        let sendTokenData = await this.getTokenData(boxInputs.sendTokenAddress);
        let sendWei = this.decimalToWei(
            boxInputs.sendDecimalValue,
            sendTokenData.decimals
        );

        // Get request token details
        let requestTokenData = await this.getTokenData(boxInputs.requestTokenAddress);
        let requestWei = this.decimalToWei(
            boxInputs.requestDecimalValue,
            requestTokenData.decimals
        );

        // If box is one-way, then baseTokenWei is defined
        // Conversely if box is OTC, then baseTokenWei is ZERO
        let baseTokenWei = ZERO;
        if (boxInputs.sendTokenAddress == ADDRESS_ZERO) {
            baseTokenWei = sendWei;
        }

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: baseTokenWei
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.createBox(
                boxInputs.recipient,
                boxInputs.sendTokenAddress,
                sendWei,
                boxInputs.requestTokenAddress,
                requestWei,
                passHashHash,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Sending aborted.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box creation aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Your outgoing transaction has been confirmed!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Box creation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Make a privacy-preserving box
    // State changing operation
    async createBoxWithPrivacy(boxInputs: BoxInputs): Promise<void> {

        // Hash the recipient for privacy
        let recipientHash = this.hash(boxInputs.recipient);

        // Double hash the password
        let passHashHash = this.doubleHash(boxInputs.password);

        // Get send token details
        let sendTokenData = await this.getTokenData(boxInputs.sendTokenAddress);
        let sendWei = this.decimalToWei(
            boxInputs.sendDecimalValue,
            sendTokenData.decimals
        );

        // If box is one-way, then baseTokenWei is defined
        // Conversely if box is OTC, then baseTokenWei is ZERO
        let baseTokenWei = ZERO;
        if (boxInputs.sendTokenAddress == ADDRESS_ZERO) {
            baseTokenWei = sendWei;
        }

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: baseTokenWei
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.createBox(
                recipientHash,
                boxInputs.sendTokenAddress,
                sendWei,
                passHashHash,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Sending aborted.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box creation aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Your outgoing transaction has been confirmed!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Box creation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Cancel a box
    // State changing operation
    async cancelBox(boxIndex: number): Promise<void> {

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: ZERO // Do I really need this?
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.cancelBox(
                boxIndex,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Sending aborted.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box creation aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Cancelling transaction successful!",
            duration: "long"
        });

        this.viewConsoleServ.log(
            `Box cancellation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Cancel a privacy-preserving box
    // State changing operation
    async cancelBoxWithPrivacy(boxIndex: number): Promise<void> {

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: ZERO // Do I really need this?
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.cancelBoxWithPrivacy(
                boxIndex,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Sending aborted.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box creation aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Cancelling transaction successful!",
            duration: "long"
        });

        this.viewConsoleServ.log(
            `Box cancellation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Accept a box
    // State changing operation
    async acceptBox(box: Box, password: string): Promise<void> {

        // Hash the password to check if the user has unlocked the box
        let passHash = this.hash(password);

        // If the requestedToken is the base token, then there's no need to approve
        let baseTokenWei = ZERO;
        if (box.requestToken == ADDRESS_ZERO) {
            baseTokenWei = box.requestValue;
        } else {

            // Getting the user balance of the requestedToken
            let tokenBalance = await this.getTokenBalance(box.requestToken);

            // If the balance is not enough, then reject the operation
            if ((new BigNumber(box.requestValue)).gt(tokenBalance.wei)) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: `Your have ${tokenBalance.decimalValue} ${box.requestTokenInfo.symbol}, not enough for the exchange.`,
                    duration: "long"
                });
                return;
            }

            // If the allowance is not enough, then ask for the approval
            if ((new BigNumber(box.requestValue)).gt(tokenBalance.weiAllowance)) {

                // Spawn a dialog
                let isConfirmed = await this.confirmDialogServ.spawn({
                    dialogName: "Do you want to approve?",
                    message: 'To accept the exchange you need to approve the requested token first. The approval is required only once per token.<br><span class="fw-bold">Do you want to approve?<span>',
                    confirmButtonName: "Approve"
                });

                // Confirm dialog dismissed
                if (!isConfirmed) return;

                await this.approveMax(box.requestToken);
                // Stopping here, the user has to click again (clearer from UX perspective)
                return;
            }
        }

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: baseTokenWei
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.clearBox(
                box.index,
                passHash,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Box approval aborted. Details in the console.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box approval aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "The box has been accepted!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Box approval confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    // Accept a privacy-preserving box
    // State changing operation
    async acceptBoxWithPrivacy(box: Box, password: string): Promise<void> {

        // Hash the password to check if the user has unlocked the box
        let passHash = this.hash(password);

        // Overrides in ethers are similar to .send({ value: ethValue }) in web3
        let overrides = {
            value: ZERO // Do I really need this?
        };

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.ethboxContract.clearBoxWithPrivacy(
                box.index,
                passHash,
                overrides
            );
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Box approval aborted. Details in the console.",
                duration: "long"
            });
            this.viewConsoleServ.error("Box approval aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "The box has been accepted!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Box approval confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.boxInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

    async signMessage(message) {

        let signature;
        try {
            signature = await this.connection.signer$.getValue().signMessage(message);
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Sign of message aborted. Details in the console",
                duration: "long"
            });
            this.viewConsoleServ.error("Sign of message aborted");
        }

        this.viewConsoleServ.log(
            `A message was signed successfully (message: ${message}, sign: ${signature})`
        );

        // Return the signature to the consumer
        return signature;
    }

    // Return the decimal value for the staking rewards the user can claim
    // Read only query
    async getReward() {
        let bn = await this.stakingContract.getUnclaimedReward();
        return this.weiToDecimal(bn.toString(), 18);
    }

    // State changing operation
    async claimReward() {

        // Start loading
        this.loadingIndicatorServ.on();

        // Making of the transaction
        let tx;
        try {
            tx = await this.stakingContract.claimReward();
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Reward claiming aborted. Details in the console.",
                duration: "long"
            });
            this.viewConsoleServ.error("Reward claiming aborted");

            this.loadingIndicatorServ.off();
            throw err;
        }

        // Waiting for transaction confirmation
        this.toasterServ.toastMessage$.next({
            type: "secondary",
            message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
            duration: "short"
        });
        this.viewConsoleServ.warning(
            `Waiting for transaction to confirm (tx hash: ${tx.hash})`
        );

        let receipt = await tx.wait();

        // Transaction confirmed
        this.toasterServ.toastMessage$.next({
            type: "success",
            message: "Reward has been claimed!",
            duration: "long"
        });
        this.viewConsoleServ.log(
            `Rewards claimed successfully (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`
        );

        // Stop loading
        this.stakingInteraction$.next(true);
        this.loadingIndicatorServ.off();

        // Return receipt to the consumer
        return receipt;
    }

}

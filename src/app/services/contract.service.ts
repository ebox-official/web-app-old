import { Injectable, NgZone } from '@angular/core';
import { ADDRESS_ZERO, ZERO, MAX_VALUE } from '../constants/various';
import { STAKING, ETHBOX, TOKEN_DISPENSER, ERC20_ABI } from '../constants/abis';
import { chainTokenDictionary } from '../constants/tokens';
import { TokenData, TokenBalance, Box, BoxInputs } from '../interfaces';
import { LoadingIndicatorService } from './loading-indicator.service';
import { ToasterService } from './toaster.service';
import { ConfirmDialogService } from './confirm-dialog.service';
import { ViewConsoleService } from './view-console.service';

import { WalletLink } from 'walletlink';
import { Provider, Signer } from "@reef-defi/evm-provider";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { WsProvider } from "@polkadot/api";
import { ethers } from "ethers";
import BigNumber from 'bignumber.js';

import { 
    SmartInterval,
    deviceType,
    isMetaMaskInstalled,
    AsyncVar,
    AsyncPulse
} from '../../assets/js/custom-utils';

/**
 * This service is the core component in the ethbox dapp. It contains all the methods to interact
 * with the blockchain.
 * 
 * Below a short table indicating the variables/events available from this service:
 * (Implementation flags)
 * - chainId$
 * - selectedAccount$
 * 
 * (Low-level flags)
 * - isChainSupported$
 * - isEthereumMainnet$
 * - isBinanceMainnet$
 * - isMaticMainnet$
 * - isReef$
 * - reefCustomProviderName
 * 
 * (High-level flags)
 * - isAppReady$
 * - isStakingReady$
 * 
 * (Interaction impulses)
 * - approvalInteraction$
 * - boxInteraction$
 * - stakingInteraction$
 * - tokenDispenserInteraction$
 * 
 * Following a table of methods that are available here:
 * (Handshaking stuff)
 * + connect
 * + disconnect
 * + init
 * + fetchVariables
 * + loadTokens
 * + hardReset
 * 
 * (Network predicates)
 * + isEthereum
 * + isBinance
 * + isMatic
 * + isReef
 * + isEthereumMainnet
 * + isBinanceMainnet
 * + isMaticMainnet
 * + isReefMainnet
 * + isEthereumTestnet
 * + isBinanceTestnet
 * + isMaticTestnet
 * + isReefTestnet
 *
 * (Utilities)
 * + give100TestTokens
 * + isValidAddress
 * + doubleHash
 * + isValidPassword
 *
 * (User balance/allowance stuff)
 * + weiToDecimal
 * + decimalToWei
 * + getWeiAllowance
 * + getTokenData
 * + getTokenBalance
 * + approveMax
 *
 * (Boxes stuff)
 * + bcBox2appBox
 * + getIncomingBoxes
 * + getOutgoingBoxes
 * + createBox/createBoxWithPrivacy
 * + cancelBox/cancelBoxWithPrivacy
 * + acceptBox/acceptBoxWithPrivacy
 * + signMessage
 * + getReward
 * + claimReward
 */

// This is an hacky solution to get some scripts available here
let win: any = window;

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    // AsyncVar emits a value but also remembers it for future listeners, that value can also be read at anytime by using getValue()
    tokens$ = new AsyncVar(null);

    // These variables are just for the boxes loop, there is a SmartInterval objects that's used to fetch boxes over time so that a new request doesn't happen before the last has already resolved
    incomingBoxes$ = new AsyncVar(null);
    outgoingBoxes$ = new AsyncVar(null);
    private boxesIntervalCycleDelay = 3e3;
    private boxesInterval;
    private accountsChangedInterval;

    chainId$ = new AsyncVar(null);
    selectedAccount$ = new AsyncVar(null);

    isChainSupported$ = new AsyncVar(false);
    isEthereumMainnet$ = new AsyncVar(false);
    isBinanceMainnet$ = new AsyncVar(false);
    isMaticMainnet$ = new AsyncVar(false);

    // Separate way of handling the connection to Polkadot{.js} via Reef Defi
    isReef$ = new AsyncVar(false);
    reefCustomProviderName = null;
    
    isAppReady$ = new AsyncVar(false);
    isStakingReady$ = new AsyncVar(false);

    // AsyncPulse simply emits a value that can be listened only by those who are currently listening
    approvalInteraction$ = new AsyncPulse();
    boxInteraction$ = new AsyncPulse();
    stakingInteraction$ = new AsyncPulse();
    tokenDispenserInteraction$ = new AsyncPulse();

    // Tokens map lets you query tokens by their addresses in O(1), useful to find logos and decimals in a blink of an eye
    tokensMap;

    // These fields are changing values when chain is changed (look fetchVariables())
    private ethboxAddress;
    private ethboxContract;
    private tokenDispenserAddress;
    private tokenDispenserContract;

    private stakingAddress;
    private stakingContract;

    // Unpkg imports
    private Web3Modal = win.Web3Modal.default;
    private WalletConnectProvider = win.WalletConnectProvider.default;

    // API keys for various providers
    private INFURA_ID = 'b5b51030cf3e451bb523a3f2ca10e3ff';

    private web3Modal;
    private provider;
    private signer;

    constructor(
        private loadingIndicatorServ: LoadingIndicatorService,
        private ngZone: NgZone,
        private toasterServ: ToasterService,
        private confirmDialogServ: ConfirmDialogService,
        private viewConsoleServ: ViewConsoleService
    ) {
        this.init();
    }

    // Connect the user to the dapp
    // Run on user interaction
    async connect(): Promise<void> {

        try {
            let connection = await this.web3Modal.connect();

            // When user has tapped on Reef, initialize things differently
            if (connection.custom && /reef/.test(connection.custom)) {

                this.isReef$.next(true);

                // Either "reeftestnet" or "reefmainnet"
                this.reefCustomProviderName = connection.custom;

                this.loadingIndicatorServ.on();

                let WS_URL = this.isReefTestnet() ?
                    "wss://rpc-testnet.reefscan.com/ws" :
                    "wss://rpc.reefscan.com/ws";
                
                // Return an array of all the injected sources
                // (this needs to be called first)
                const allInjected = await web3Enable('ethbox dapp');
                console.log("All injected", allInjected);

                let signer;
                if (allInjected[0] && allInjected[0].signer) {
                    signer = allInjected[0].signer;
                }

                // Return an array of { address, meta: { name, source } }
                // (meta.source contains the name of the extension)
                const allAccounts = await web3Accounts();
                console.log("All accounts", allAccounts);

                if (allAccounts[0] && allAccounts[0].address) {
                    this.selectedAccount$.next(allAccounts[0].address);
                }

                if (!this.selectedAccount$.getValue()) {
                    this.loadingIndicatorServ.off();
                    return;
                }

                this.provider = new Provider({
                    provider: new WsProvider(WS_URL)
                });
                console.log("Provider", this.provider);

                await this.provider.api.isReady;

                this.signer = new Signer(
                    this.provider,
                    this.selectedAccount$.getValue(),
                    signer
                );
                console.log("Signer", this.signer);

                this.loadingIndicatorServ.off();
            }
            else {
                this.isReef$.next(false);

                this.provider = new ethers.providers
                    .Web3Provider(
                        connection.provider,
                        "any"
                    );
                console.log("Provider", this.provider);
    
                this.signer = this.provider.getSigner();
                console.log("Signer", this.signer);
            }
        }
        catch (err) {
            this.toasterServ.toastMessage$.next({
                type: "danger",
                message: "Wallet connection failed!",
                duration: "long"
            });

            this.viewConsoleServ.error("Could not get a wallet connection");
            return;
        }
        
        if (!this.isReef$.getValue()) {

            // Listeners to refresh contracts on network and account changes
            this.provider.on("network", () =>
                this.ngZone.run(() =>
                    this.fetchVariables()
                )
            );

            // ethers doesn't support "accountsChanged" event so I have to do it manually
            // I chose 1000ms as it's not much different from the delay of the "network" event
            this.accountsChangedInterval = setInterval(async () => {

                let accounts = await this.provider.listAccounts();

                if (this.selectedAccount$.getValue() !== accounts[0]) {
                    this.ngZone.run(() => 
                        this.fetchVariables()
                    );
                }
            }, 1000);
        }

        // Wallet initialized
        await this.fetchVariables();
    }

    // Disconnect the user from the dapp
    // Run on user interaction
    async disconnect(): Promise<void> {

        if (!this.isReef$.getValue() && "removeAllListeners" in this.provider) {
            this.provider.removeAllListeners("network");
            clearInterval(this.accountsChangedInterval);
        }

        if (this.provider.close) {
            await this.provider.close();
        }

        // If the cached provider is not cleared, WalletConnect will default to the existing session and does not allow to re-scan the QR code with a new wallet
        await this.web3Modal.clearCachedProvider();

        this.provider = null;
        this.signer = null;

        this.hardReset();
        this.loadingIndicatorServ.off();
    }

    // Setup Web3Modal and launch the box interval
    private init(): void {

        let MetaMaskOpts = {
            "custom-metamask": {
                display: {
                  logo: "assets/img/metamask-logo.svg",
                  name: "MetaMask Wallet",
                  description: "Connect to your MetaMask wallet"
                },
                package: true,
                connector: async () => {
                    if (!isMetaMaskInstalled()) {
                        win.location = "https://metamask.app.link/dapp/www.ethbox.org/app/";
                        return;
                    }

                    let provider = null;
                    if (typeof win.ethereum !== 'undefined') {
                        provider = win.ethereum;
                        try {
                            await provider.request({ method: 'eth_requestAccounts' });
                        } catch (error) {
                            throw new Error("User Rejected");
                        }
                    } else {
                        throw new Error("No MetaMask Wallet found");
                    }
                    return { provider, custom: "metamask" };
                }
            }
        };

        let WalletConnectOpts = {
            walletconnect: {
                package: this.WalletConnectProvider,
                options: {
                    infuraId: this.INFURA_ID
                }
            }
        };

        let BinanceChainWalletOpts = {
            "custom-binancechainwallet": {
                display: {
                  logo: "assets/img/binance-logo.svg",
                  name: "Binance Chain Wallet",
                  description: "Connect to your Binance Wallet"
                },
                package: true,
                connector: async () => {
                    let provider = null;
                    if (typeof win.BinanceChain !== 'undefined') {
                        provider = win.BinanceChain;
                        try {
                            await provider.request({ method: 'eth_requestAccounts' });
                        } catch (error) {
                            throw new Error("User Rejected");
                        }
                    } else {
                        throw new Error("No Binance Chain Wallet found");
                    }
                    return { provider, custom: "binancechainwallet" };
                }
            }
        };

        let CoinbaseWalletOpts = {
            "custom-coinbase": {
                display: {
                    logo: 'assets/img/coinbase-logo.svg', 
                    name: 'Coinbase',
                    description: 'Connect with Coinbase wallet'
                },
                options: {
                    appName: 'ethbox',
                    networkUrl: `https://mainnet.infura.io/v3/${this.INFURA_ID}`,
                    chainId: 1
                },
                package: WalletLink,
                connector: async (_, options) => {
                    let { appName, networkUrl, chainId } = options
                    let walletLink = new WalletLink({ appName });
                    let provider = walletLink.makeWeb3Provider(networkUrl, chainId);
                    await provider.enable();
                    return { provider, custom: "coinbase" };
                }
            }
        };

        let ReefTestnetOpts = {
            "custom-reeftestnet": {
                display: {
                  logo: "assets/img/reef-testnet.png",
                  name: "Polkadot Wallet",
                  description: "Reef Finance Testnet"
                },
                package: true,
                connector: async () => ({ custom: "reeftestnet" })
            }
        };

        let ReefMainnetOpts = {
            "custom-reefmainnet": {
                display: {
                  logo: "assets/img/reef.png",
                  name: "Polkadot Wallet",
                  description: "Reef Finance Mainnet"
                },
                package: true,
                connector: async () => ({ custom: "reefmainnet" })
            }
        };

        // Put here providers that work on every device
        let providerOptions = {
            ...MetaMaskOpts,
            ...WalletConnectOpts,
            ...CoinbaseWalletOpts
        };

        // Put here providers that only works on desktop
        if (deviceType() === "desktop") {
            Object.assign(
                providerOptions,
                BinanceChainWalletOpts,
                ReefTestnetOpts,
                ReefMainnetOpts
            );
        }

        this.web3Modal = new this.Web3Modal({
            cacheProvider: deviceType() === "desktop", // Clear cache only on desktop to avoid getting stuck when using deep link
            providerOptions,
            disableInjectedProvider: true
        });

        this.boxesInterval = new SmartInterval(
            async () => {
                this.incomingBoxes$.next(await this.getIncomingBoxes());
                this.outgoingBoxes$.next(await this.getOutgoingBoxes());
            },
            this.boxesIntervalCycleDelay
        );

        // I want the boxes to be fetched on boxInteraction$
        this.boxInteraction$.subscribe(() =>
            this.boxesInterval.forceExecution()
        );

        // Automatically connect if there's a cached provider
        if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) {
            this.connect();
        }
    }

    /**
     * - Get chain ID
     * - Get selected account
     * - Load supported tokens
     * - Instantiate ethbox and staking contract
     * - Log info in the console
     * 
     * TODO: Add links to network scanners
     */
    private async fetchVariables(): Promise<void> {

        this.softReset();

        this.loadingIndicatorServ.on();

        // Retrieving the chainId
        let { chainId } = await this.provider.getNetwork();
        console.log("Chain ID", chainId);

        this.chainId$.next(chainId);

        if (!this.isReef$.getValue()) {

            // Retrieving the selectedAccount
            let accounts = await this.provider.listAccounts();
            console.log("Accounts", accounts);

            this.selectedAccount$.next(accounts[0]);
        }

        // If there's no account selected stop here, there's no point in going further
        if (!this.selectedAccount$.getValue()) {
            this.loadingIndicatorServ.off();
            return;
        }

        this.viewConsoleServ.log(`Selected chain is ${this.chainId$.getValue()}`);
        this.viewConsoleServ.log(`Connected user is ${this.selectedAccount$.getValue()}`);

        this.viewConsoleServ.log("1 - Ethereum");
        this.viewConsoleServ.log("4 - Rinkeby");
        this.viewConsoleServ.log("56 - BSC");
        this.viewConsoleServ.log("97 - BSC Testnet");
        this.viewConsoleServ.log("137 - Matic");
        this.viewConsoleServ.log("80001 - Matic Testnet");

        // The following code sets contracts depending on the current chain
        switch(chainId) {
            case 13939: // Reef
                if (this.isReefTestnet()) {
                    this.ethboxAddress = ETHBOX.ADDRESSES.REEF_TESTNET;
                } else {
                    this.hardReset();
                    this.loadingIndicatorServ.off();
                    return;
                }
                break;
            case 1:     // Ethereum Mainnet
                this.isEthereumMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.ETHEREUM;
                this.stakingAddress = STAKING.ADDRESSES.ETHEREUM;
                break;
            case 4:     // Ethereum Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.ETHEREUM_TESTNET; 
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.ETHEREUM_TESTNET;
                break;
            case 56:    // Binance Mainnet
                this.isBinanceMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.BINANCE;
                this.stakingAddress = STAKING.ADDRESSES.BINANCE;
                break;
            case 97:    // Binance Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.BINANCE_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.BINANCE_TESTNET;
                break;
            case 137:   // Matic Mainnet
                this.isMaticMainnet$.next(true);
                this.ethboxAddress = ETHBOX.ADDRESSES.MATIC;
                break;
            case 80001: // Matic Testnet
                this.ethboxAddress = ETHBOX.ADDRESSES.MATIC_TESTNET;
                this.tokenDispenserAddress = TOKEN_DISPENSER.ADDRESSES.MATIC_TESTNET;
                break;
            default:
                this.hardReset();
                this.loadingIndicatorServ.off();
                return;
        }

        if (this.ethboxAddress) {
            this.ethboxContract = new ethers.Contract(
                this.ethboxAddress,
                ETHBOX.ABI,
                this.signer
            );
        }

        if (this.stakingAddress) {
            this.stakingContract = new ethers.Contract(
                this.stakingAddress,
                STAKING.ABI,
                this.signer
            );
            this.isStakingReady$.next(true);
        }

        if (this.tokenDispenserAddress) {
            this.tokenDispenserContract = new ethers.Contract(
                this.tokenDispenserAddress,
                TOKEN_DISPENSER.ABI,
                this.signer
            );
        }

        this.loadTokens();
        this.boxesInterval.start();
        this.isChainSupported$.next(true);
        this.isAppReady$.next(true);

        this.viewConsoleServ.log(`Ethbox contract address is ${this.ethboxAddress}`);
        this.viewConsoleServ.log(`Staking contract address is ${this.stakingAddress}`);
        this.viewConsoleServ.log(
            `Supported tokens are loaded (${this.tokens$.getValue()?.length})`
        );

        this.loadingIndicatorServ.off();
    }

    // Get custom tokens from LS and merge them with curated ones
    loadTokens() {

        let LSKey = `customTokens${this.chainId$.getValue()}`;

        let customTokens = [],
            curatedTokens = [];

        // Take custom tokens from localStorage and give them the unknown icon
        let customTokensLS = localStorage.getItem(LSKey);
        if (customTokensLS) {
            customTokens = JSON.parse(customTokensLS);
            customTokens.forEach(token => token.thumb = 'assets/img/unknown-icon.png');
        }

        // Take tokens from curated lists for the current network
        let currentChainTokens = chainTokenDictionary[this.chainId$.getValue()];
        if (currentChainTokens) {
            curatedTokens = currentChainTokens;
        }

        let mergedResults = [...customTokens, ...curatedTokens];
        this.tokensMap = mergedResults.reduce((a, b) => (a[b.address] = b, a), {});;
        this.tokens$.next(mergedResults);
    }

    // Changing network/user
    private softReset() {
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

    // Disconnecting
    private hardReset() {
        this.softReset();

        this.reefCustomProviderName = null;
        this.isReef$.next(false);

        this.selectedAccount$.next(null);
        this.chainId$.next(null);
    }

    isEthereum(): boolean {
        return [1, 4].includes(this.chainId$.getValue());
    }

    isBinance(): boolean {
        return [56, 97].includes(this.chainId$.getValue());
    }

    isMatic(): boolean {
        return [137, 80001].includes(this.chainId$.getValue());
    }

    isReef(): boolean {
        return this.isReef$.getValue();
    }

    isEthereumMainnet(): boolean {
        return this.chainId$.getValue() == 1;
    }

    isBinanceMainnet(): boolean {
        return this.chainId$.getValue() == 56;
    }

    isMaticMainnet(): boolean {
        return this.chainId$.getValue() == 137;
    }

    isReefTestnet(): boolean {
        if (this.isReef$.getValue()) {
            return /testnet/.test(this.reefCustomProviderName);
        }
        return false;
    }

    isEthereumTestnet(): boolean {
        return this.chainId$.getValue() == 4;
    }

    isBinanceTestnet(): boolean {
        return this.chainId$.getValue() == 97;
    }

    isMaticTestnet(): boolean {
        return this.chainId$.getValue() == 80001;
    }

    isReefMainnet(): boolean {
        if (this.isReef$.getValue()) {
            return /testnet/.test(this.reefCustomProviderName);
        }
        return false;
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
                ethers.utils.parseUnits("100", 18)
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
        return ethers.utils.isAddress(address);
    }

    private hash(string) {
        return ethers.utils.id(string);
    }

    private doubleHash(string) {
        return this.hash(this.hash(string));
    }

    // Check if the password provided fits the one that encrypted the box
    isValidPassword(box: Box, password: string): boolean {
        return box.passHashHash === this.doubleHash(password);
    }

    // What about using ethers.utils.formatEthers() instead?
    weiToDecimal(wei: string, decimals: string | number): string {
        let multiplier = '1' + ZERO.repeat(Number(decimals));
        let _wei = new BigNumber(wei);
        return _wei.dividedBy(multiplier).toFixed();
    }

    // What about using ethers.utils.parseUnits() instead?
    decimalToWei(decimalValue: string, decimals: string | number): string {
        let multiplier = '1' + ZERO.repeat(Number(decimals));
        let _decimal = new BigNumber(decimalValue);
        return _decimal.multipliedBy(multiplier).toFixed();
    }

    // Read only query
    private async getWeiAllowance(tokenAddress: string): Promise<string> {

        let tokenContract = new ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            this.provider
        );

        let allowance = await tokenContract.allowance(
            this.selectedAccount$.getValue(),
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

            let tokenContract = new ethers.Contract(
                tokenAddress,
                ERC20_ABI,
                this.provider
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
        let selectedAccount = this.selectedAccount$.getValue();

        let wei, weiAllowance;

        // If it's the base token, then mocks the allowance as unlimited (MAX_VALUE)
        if (tokenAddress == ADDRESS_ZERO) {
            wei = (await this.provider.getBalance(selectedAccount)).toString();
            weiAllowance = MAX_VALUE;
        }
        else {

            let tokenContract = new ethers.Contract(
                tokenAddress,
                ERC20_ABI,
                this.provider
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

        let tokenContract = new ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            this.signer
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
                // This is just to implement this feature faster as the code migrated from web3 to ethers, in future should be refactored to work with BigNumber at all times
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

            if (appBox.sender === this.selectedAccount$.getValue()) {
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

            if (appBox.sender === this.selectedAccount$.getValue()) {
                continue;
            }

            boxes.push(appBox);
        }

        // Sort boxes by date from newest to oldest
        boxes.sort((a, b) => b.timestamp - a.timestamp);
        win._incBox = boxes;
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
        win._outBox = boxes;
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
    // 
    // TODO: How to deal with dialogs in a flexible way?
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
            signature = await this.signer.signMessage(message);
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

import { EventEmitter, NgZone } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit, Output, Input } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { AsyncLoop } from '../../../assets/js/custom-utils';

@Component({
    selector: 'app-token-selector',
    templateUrl: './token-selector.component.html',
    styleUrls: ['./token-selector.component.css']
})
export class TokenSelectorComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() isBalanceEnabled = true;
    @Output() onTokenSelected = new EventEmitter();
    @Output() onTokenBalanceUpdated = new EventEmitter();

    randomId = `modal_${Math.random().toString(36).substring(2)}`;
    tokens;
    filteredTokens;
    selectedToken;
    selectedTokenBalance;

    private maxToShow = 60;
    private isBalanceLoading = false;
    private balancePollingCycleDelay = 6e3;
    private balancePollingStartDelay = 0;
    private balancePollingLoop;
    private subscription;

    constructor(
        private contractServ: ContractService,
        private ngZone: NgZone) { }

    ngOnInit() {

        // This loop calls getBalanceOf(), waits for the result and then repeats
        // This polling loop never starts if isBalanceEnabled is set to false by the host component
        this.balancePollingLoop = new AsyncLoop(
            async () => {

                let balance = await this.contractServ
                    .getBalanceOf(this.selectedToken.address);

                this.ngZone.run(() => {
                    this.selectedTokenBalance = balance;
                    this.onTokenBalanceUpdated.emit(balance);
                    console.log('Selected token balance', balance);

                    this.isBalanceLoading = false;
                });
            },
            this.balancePollingCycleDelay,
            this.balancePollingStartDelay);

        this.subscription = this.contractServ.tokens$
            .subscribe(tokens => {

                this.tokens = tokens;

                this.filteredTokens = null;
                this.selectedToken = null;
                this.onTokenSelected.emit(null);

                this.balancePollingLoop.stop();
                this.selectedTokenBalance = null;
                this.onTokenBalanceUpdated.emit(null);

                if (tokens) {
                    this.filteredTokens = tokens.slice(0, this.maxToShow);
                }
            });
    }

    ngAfterViewInit() {

        // Moves the modal to the body (backdrop hackfix)
        let modal = document.getElementById(this.randomId);
        document.body.appendChild(modal);
    }

    ngOnDestroy() {

        // Removes the modal from the body (backdrop hackfix)
        document.getElementById(this.randomId).remove();

        this.subscription.unsubscribe();
        this.balancePollingLoop.stop();
    }

    async selectToken(token) {

        this.selectedToken = token;
        this.onTokenSelected.emit(token);
        console.log('Selected token', token);

        if (this.isBalanceEnabled) {
            this.selectedTokenBalance = null;
            this.onTokenBalanceUpdated.emit(null);
            this.isBalanceLoading = true;
            this.balancePollingLoop.stop();
            this.balancePollingLoop.start();
        }
    }

    filterTokens(search) {

        this.filteredTokens = this.tokens
            .filter(token => {

                let trimmed = search.trim();
                let lcSearch = trimmed.toLowerCase();
                let lcName = token.name.toLowerCase();
                let lcSymbol = token.symbol.toLowerCase();
                let lcAddress = token.address.toLowerCase();
                return !search || lcName.includes(lcSearch) || lcSymbol.includes(lcSearch) || lcAddress.includes(lcSearch);
            })
            .slice(0, this.maxToShow);
    }

    // Disables the mainnet tokens while testnet
    hardcodeDisable(token) {
        return !['AAA', 'BBB', 'CCC', 'ETH', 'BNB'].includes(token.symbol);
    }

    identifier(index, token) {
        return token.address;
    }

}

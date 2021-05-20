import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { SmartInterval } from '../../../assets/js/custom-utils';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
    selector: 'app-boxes-received-list',
    templateUrl: './boxes-received-list.component.html',
    styleUrls: ['./boxes-received-list.component.css']
})
export class BoxesReceivedListComponent implements OnInit, OnDestroy {

    paginatedBoxes = null;
    paginationText = '0-0/0';
    
    order = 'desc';
    state;
    type;
    
    chainId;
    isChainSupported;
    selectedAccount;
    isAppReady;
    message;

    private subscriptions = [];

    private pageIndex = 0;
    private pageSize = 20;
    
    private boxesIntervalCycleDelay = 5e3;
    private boxesIntervalStartDelay = 1e3;
    private boxesInterval;
    
    private fetchedBoxes;
    private filteredBoxes;

    private addressBookMap;
    
    constructor(
        public contractServ: ContractService,
        private ngZone: NgZone,
        private addressBookServ: AddressBookService) { }

    ngOnInit() {

        // Getting a dictionary of the address book to put names on boxes
        this.addressBookMap = this.addressBookServ.getAddressesMap();

        // Setting up the interval for getting boxes
        // This can be controlled with .start() and .stop()
        this.boxesInterval = new SmartInterval(
            async () => {

                let boxes = await this.contractServ.getIncomingBoxes();

                // NgZone tells Angular to keep the UI up to date
                this.ngZone.run(() => {

                    if (boxes.length === 0) {
                        this.message = 'There are no boxes';
                        return;
                    }

                    // Enriching boxes with presentational fields
                    this.message = null;
                    this.fetchedBoxes = boxes.map(box => ({
                        addressBookName: this.addressBookMap[box.sender],
                        readableTimestamp: new Date(box.timestamp)
                            .toLocaleDateString(
                                undefined,
                                { year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit' }),
                        sendTokenInfo: this.contractServ
                            .tokensMap[box.sendToken],
                        sendDecimalValue: this.contractServ
                            .getTokenDecimalValueFromWei(
                                box.sendToken,
                                box.sendValue),
                        requestTokenInfo: this.contractServ
                            .tokensMap[box.requestToken],
                        requestDecimalValue: this.contractServ
                            .getTokenDecimalValueFromWei(
                                box.requestToken,
                                box.requestValue),
                        ...box
                    }));
                    this.filterBoxes();
                });
            },
            this.boxesIntervalCycleDelay,
            this.boxesIntervalStartDelay
        );

        // Setting up the reactive code to load and reload boxes
        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$,
            this.contractServ.boxInteraction$
        ].forEach(obs => 
            this.subscriptions.push(
                obs.subscribe(() => {

                    // Resetting the component
                    this.boxesInterval.stop();
                    this.paginatedBoxes = null;
                    this.filteredBoxes = null;
                    this.fetchedBoxes = null;

                    // Updating local variables
                    this.chainId = this.contractServ.chainId$.getValue();
                    this.isChainSupported = this.contractServ.isChainSupported$.getValue();
                    this.selectedAccount = this.contractServ.selectedAccount$.getValue();
                    this.isAppReady = this.contractServ.isAppReady$.getValue();

                    // Calculating a message for the user
                    if (!this.chainId || !this.selectedAccount) {
                        this.message = 'Connect your wallet';
                        return;
                    }
                    if (!this.isChainSupported) {
                        this.message = 'Wrong network, use Rinkeby or BSC Testnet';
                        return;
                    }
                    if (!this.isAppReady) {
                        this.message = 'Initializing the Smart Contract...';
                        return;
                    }

                    // Starting the boxes interval
                    this.message = 'Loading your boxes...';
                    this.boxesInterval.start();
                })));
    }

    ngOnDestroy() {

        // When the component gets destroyed unsubscribe from everything and stop the boxes interval, to prevent memory leaks
        this.subscriptions.forEach(s => s.unsubscribe());
        this.boxesInterval.stop();
    }

    onPaginationPreviousClick() {

        if (this.pageIndex < 1) {
            return;
        }
        this.pageIndex--;
        this.updatePagination();
    }

    onPaginationNextClick() {

        if (this.pageIndex * this.pageSize + this.pageSize > this.filteredBoxes.length - 1) {
            return;
        }
        this.pageIndex++;
        this.updatePagination();
    }

    updatePagination() {

        let start = this.pageIndex * this.pageSize,
            end = this.pageIndex * this.pageSize + this.pageSize;
        if (end > this.filteredBoxes.length) {
            end = this.filteredBoxes.length;
        }
        this.paginationText = `${start + 1}-${end}/${this.filteredBoxes.length}`;
        this.paginatedBoxes = this.filteredBoxes.slice(start, end);
    }

    filterBoxes() {

        if (!this.fetchedBoxes) {
            return;
        }

        this.filteredBoxes = this.fetchedBoxes
            .filter(box =>
                !this.state || box.taken == (this.state == 'completed'))
            .filter(box =>
                !this.type || box.requestValue === '0' == (this.type == 'withdraw'));

        if (this.order) {
            this.filteredBoxes.sort((a, b) =>
                this.order == 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp);
        }

        this.pageIndex = 0;
        this.updatePagination();
    }

    // This piece of code tells Angular how to track boxes efficiently, when and where to touch the DOM
    identifier(index, box) {
        return `${box.sender}-${box.recipient}-${box.taken}-${box.timestamp}`;
    }
}

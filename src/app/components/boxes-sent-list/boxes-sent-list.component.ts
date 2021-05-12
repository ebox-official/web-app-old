import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { AsyncLoop } from '../../../assets/js/custom-utils';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
    selector: 'app-boxes-sent-list',
    templateUrl: './boxes-sent-list.component.html',
    styleUrls: ['./boxes-sent-list.component.css']
})
export class BoxesSentListComponent implements OnInit, OnDestroy {

    paginationText = '0-0/0';
    order = 'desc';
    paginatedBoxes = null;
    search = '';
    state;
    type;

    private pageIndex = 0;
    private pageSize = 20;
    private subscriptions = [];
    private boxesFetchingCycleDelay = 21e3;
    private boxesFetchingStartDelay = 1e3;
    private boxesFetchingLoop;
    private addressBookMap;
    private fetchedBoxes;
    private filteredBoxes;

    constructor(
        public contractServ: ContractService,
        private ngZone: NgZone,
        private addressBookServ: AddressBookService) { }

    ngOnInit() {

        this.addressBookMap = this.addressBookServ.getAddressesMap();

        // This component asks the ContractService to refresh its boxes
        this.boxesFetchingLoop = new AsyncLoop(
            () => this.contractServ.fetchBoxes(),
            this.boxesFetchingCycleDelay,
            this.boxesFetchingStartDelay);

        // When the app is ready or the balance has changed reset the data and restart the loop
        [
            this.contractServ.isAppReady$,
            this.contractServ.balanceChanged$
        ].forEach(obs =>
            this.subscriptions.push(
                obs.subscribe(() => {

                    if (this.boxesFetchingLoop.runningState.isRunning) {

                        this.boxesFetchingLoop.stop();
                        this.paginatedBoxes = null;
                        this.fetchedBoxes = null;
                        this.filteredBoxes = null;
                    }
                    if (this.contractServ.isAppReady$.getValue()) {

                        this.subscriptions.push(
                            this.contractServ.boxes$
                                .subscribe(boxes => {
                                    if (boxes) {
                                        this.ngZone.run(() => this.mapBoxes(boxes));
                                    }
                                })
                        );
                        this.boxesFetchingLoop.start();
                    }
                })
            ));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.boxesFetchingLoop.stop();
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
                !this.type || box.request_value === '0' == (this.type == 'withdraw'))
            .filter(box => {

                let lcSearch = this.search.trim().toLocaleLowerCase();
                let lcBoxString = JSON.stringify(box).toLocaleLowerCase();
                return !lcSearch || lcBoxString.includes(lcSearch);
            });

        if (this.order) {
            this.filteredBoxes.sort((a, b) =>
                this.order == 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp);
        }

        this.pageIndex = 0;
        this.updatePagination();
    }

    identifier(index, box) {
        return `${box.sender}-${box.recipient}-${box.taken}-${box.timestamp}`;
    }

    private mapBoxes(boxes) {

        // This mapping belongs to ContractService, but it's done here for the time being. It performant to map only those boxes that are sent
        this.fetchedBoxes = boxes
            .reduce((results, box, index) => {

                let boxOfAccount;
                if (box.sender == this.contractServ.selectedAccount$.getValue()) {
                    boxOfAccount = true;
                }

                if (boxOfAccount) {
                    let enrichedBox = {
                        ...box,
                        index,
                        addressBookName: this.addressBookMap[box.recipient],
                        readableTimestamp: this.contractServ
                            .decodeSmartContractTimestamp(box.timestamp)
                            .readableTimestamp,
                        sendTokenInfo: this.contractServ
                            .tokensMap[box.send_token],
                        sendDecimalValue: this.contractServ
                            .getTokenDecimalValueFromWei(box.send_token, box.send_value),
                        requestTokenInfo: this.contractServ
                            .tokensMap[box.request_token],
                        requestDecimalValue: this.contractServ
                            .getTokenDecimalValueFromWei(box.request_token, box.request_value)
                    };
                    results.push(enrichedBox);
                }
                return results;
            }, []);
        this.filterBoxes();
    }

}

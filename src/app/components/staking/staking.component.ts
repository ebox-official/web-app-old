import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
    selector: 'app-staking',
    templateUrl: './staking.component.html',
    styleUrls: ['./staking.component.css']
})
export class StakingComponent implements OnInit {

    monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    today = new Date();
    pageMonth;
    pageDate;
    search;
    filteredRewards;
    selectedAccountReward;
    isLoading;

    private numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private minMonth;
    private minDate;
    private maxMonth;
    private maxDate;
    private fetchedRewards;
    private selectedAccount;

    constructor(private contractServ: ContractService) { }

    async ngOnInit() {

        this.pageMonth = this.today.getMonth();
        this.pageDate = this.today.getDate();

        let dateLimits = await this.getDateLimits();

        this.minMonth = dateLimits.min_month - 1;
        this.minDate = +dateLimits.min_day;
        this.maxMonth = dateLimits.max_month - 1;
        this.maxDate = +dateLimits.max_day;

        this.pageMonth = this.maxMonth;
        this.pageDate = this.maxDate;

        await this.fetchRewards();
        this.filterRewards();

        this.contractServ.isAppReady$
            .subscribe(async isReady => {

                if (isReady) {

                    this.selectedAccount = this.contractServ.selectedAccount$.getValue();
                    await this.fetchRewards();
                    this.filterRewards();
                }
            });
    }

    async getDateLimits() {

        let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';

        let formData = new FormData();
        formData.append('action', 'get_date_limits');

        let result = await fetch(endpoint, { method: 'POST', body: formData });
        return await result.json();
    }

    async getData() {

        let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';

        let formData = new FormData();
        formData.append('action', 'get_data');
        formData.append('month', this.pageMonth + 1);
        formData.append('day', this.pageDate);

        let result = await fetch(endpoint, { method: 'POST', body: formData });
        return await result.json();
    }

    async onPaginationPreviousClick() {

        if (this.pageDate <= this.minDate && this.pageMonth <= this.minMonth) {
            return;
        }
        if (this.pageDate < 2) {
            if (this.pageMonth == 0) {
                this.pageMonth = this.monthsNames.length - 1;
            }
            else {
                this.pageMonth--;
            }
            this.pageDate = this.numberOfDaysInMonths[this.pageMonth];
        }
        else {
            this.pageDate--;
        }
        await this.fetchRewards();
        this.filterRewards();
    }

    async onPaginationNextClick() {

        if (this.pageDate >= this.maxDate && this.pageMonth >= this.maxMonth) {
            return;
        }
        if (this.pageDate == this.numberOfDaysInMonths[this.pageMonth]) {
            if (this.pageMonth == this.monthsNames.length - 1) {
                this.pageMonth = 0;
            }
            else {
                this.pageMonth++;
            }
            this.pageDate = 1;
        }
        else {
            this.pageDate++;
        }
        await this.fetchRewards();
        this.filterRewards();
    }

    filterRewards() {

        this.filteredRewards = this.fetchedRewards
            .filter(item =>
                !this.search || (item.address.toLowerCase()).includes(this.search.trim().toLowerCase()))
            .sort((a, b) => b.balance - a.balance);
    }

    private async fetchRewards() {

        this.isLoading = true;
        let results = await this.getData();
        this.fetchedRewards = results
            .map(result => ({ ...result, apy: 100 * 12 * result.reward / result.balance }));

        if (this.selectedAccount) {
            this.selectedAccountReward = this.fetchedRewards
                .find(item =>
                    item.address.toLowerCase() == this.selectedAccount.toLowerCase());
        }
        this.isLoading = false;
    }

}

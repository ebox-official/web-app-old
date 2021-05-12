import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';

@Component({
    selector: 'app-governance',
    templateUrl: './governance.component.html',
    styleUrls: ['./governance.component.css']
})
export class GovernanceComponent implements OnInit {

    url = 'https://www.ethbox.org/gov';
    lastSegment = '/voting.php';
    votingAreas = [{
        urlSuffix: '/',
        title: 'Protocol'
    }, {
        urlSuffix: '/community/',
        title: 'Community'
    }];
    pageData;
    clockTimer;
    datetime;

    constructor(
        public contractServ: ContractService,
        private loadingIndicatorServ: LoadingIndicatorService) { }

    async ngOnInit() {

        this.clockTimer = setInterval(() => this.datetime = new Date().toUTCString(), 1000);

        this.loadingIndicatorServ.on();
        this.pageData = [];
        for (let { title, urlSuffix } of this.votingAreas) {

            // Enriching proposals with properties
            let proposals = await this.getVotings(urlSuffix);
            for (let p of proposals) {
                p.isEligible = await this.isEligible(urlSuffix, p.n);
                p.hasVoted = await this.hasVoted(urlSuffix, p.n);
                p.votes = await this.getVotes(urlSuffix, p.n);
            }

            // I need these '_id's to make nested collapse
            proposals.forEach(proposal => {
                proposal._id = 'c_' + Math.random().toString(36).substring(2),
                proposal.startDatetime = new Date(proposal.time_start * 1e3).toUTCString(),
                proposal.endDatetime = new Date(proposal.time_end * 1e3).toUTCString(),
                proposal.hasExpired = Date.now() > proposal.time_end * 1e3
            });
            this.pageData.push({ 
                _id: 'c_' + Math.random().toString(36).substring(2),
                title,
                proposals
            });
        }
        console.log('pageData is', this.pageData);
        this.loadingIndicatorServ.off();
    }

    ngOnDestroy() {
        clearInterval(this.clockTimer);
    }

    async getVotings(urlSuffix) {

        let endpoint = this.url + urlSuffix + this.lastSegment;

        let formData = new FormData();
        formData.append('action', 'get_votings');

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let proposals = await response.json();

        // Parsing answers from string to array
        proposals.forEach(proposal =>
            proposal.answers = JSON.parse(proposal.answers));
        return proposals;
    }

    async isEligible(urlSuffix, votingNumber) {

        let endpoint = this.url + urlSuffix + this.lastSegment;

        let formData = new FormData();
        formData.append('action', 'is_eligible');
        formData.append('voting', votingNumber);
        formData.append('address', this.contractServ.selectedAccount$.getValue());

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { is_eligible } = await response.json();
        return is_eligible;
    }

    async hasVoted(urlSuffix, votingNumber) {

        let endpoint = this.url + urlSuffix + this.lastSegment;

        let formData = new FormData();
        formData.append('action', 'has_voted');
        formData.append('voting', votingNumber);
        formData.append('address', this.contractServ.selectedAccount$.getValue());

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { has_voted } = await response.json();
        return has_voted;
    }

    async getVotes(urlSuffix, votingNumber) {

        let endpoint = this.url + urlSuffix + this.lastSegment;

        let formData = new FormData();
        formData.append('action', 'get_votes');
        formData.append('voting', votingNumber);

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let votes = await response.json();

        return {
            sum: votes.reduce((a, b) => a + b.answer, 0),
            votes
        };
    }

}

import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';

@Component({
    selector: 'app-governance',
    templateUrl: './governance.component.html',
    styleUrls: ['./governance.component.css']
})
export class GovernanceComponent implements OnInit {

    proposals;
    clockTimer;
    datetime;

    constructor(
        public contractServ: ContractService,
        private loadingIndicatorServ: LoadingIndicatorService) { }

    async ngOnInit() {

        this.clockTimer = setInterval(() => this.datetime = new Date().toUTCString(), 1000);

        this.loadingIndicatorServ.on();

        // Enriching proposals with booleans
        let proposals = await this.getVotings();
        for (let p of proposals) {
            p.isEligible = await this.isEligible(p.n);
            p.hasVoted = await this.hasVoted(p.n);
        }
        this.proposals = proposals;

        this.loadingIndicatorServ.off();
    }

    ngOnDestroy() {
        clearInterval(this.clockTimer);
    }

    async getVotings() {

        let endpoint = 'https://www.ethbox.org/gov/voting.php';

        let formData = new FormData();
        formData.append('action', 'get_votings');

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let proposals = await response.json();

        // Parsing answers from string to array
        proposals.forEach(proposal =>
            proposal.answers = JSON.parse(proposal.answers));
        return proposals;
    }

    async isEligible(votingNumber) {

        let endpoint = 'https://www.ethbox.org/gov/voting.php';

        let formData = new FormData();
        formData.append('action', 'is_eligible');
        formData.append('voting', votingNumber);
        formData.append('address', this.contractServ.selectedAccount$.getValue());

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { is_eligible } = await response.json();
        return is_eligible;
    }

    async hasVoted(votingNumber) {

        let endpoint = 'https://www.ethbox.org/gov/voting.php';

        let formData = new FormData();
        formData.append('action', 'has_voted');
        formData.append('voting', votingNumber);
        formData.append('address', this.contractServ.selectedAccount$.getValue());

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { has_voted } = await response.json();
        return has_voted;
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
    selector: 'app-governance-proposal',
    templateUrl: './governance-proposal.component.html',
    styleUrls: ['./governance-proposal.component.css']
})
export class GovernanceProposalComponent implements OnInit {

    @Input() proposal;

    proposalId = `proposal_${Math.random().toString(36).substring(2)}`;
    startDatetime;
    endDatetime;
    hasExpired;
    selectedChoice;

    private now = Date.now();

    constructor(public contractServ: ContractService) { }

    ngOnInit(): void {
        this.startDatetime = new Date(this.proposal.time_start * 1e3).toUTCString();
        this.endDatetime = new Date(this.proposal.time_end * 1e3).toUTCString();
        this.hasExpired = this.now > this.proposal.time_end * 1e3;
    }

    async onVoteClicked() {

        let response: any = await this.contractServ
            .signMessage(`ethbox Vote #${this.proposal.n}`);
        let signedMessage = response.result;

        console.log('Signed message is', signedMessage);

        this.castVote(
            this.proposal,
            this.selectedChoice,
            this.contractServ.selectedAccount$.getValue(),
            signedMessage);
    }

    private async castVote(proposal, vote, account, signedMessage) {

        console.log('Proposal is', proposal);
        console.log('Choosen vote is', vote);
        console.log('Connected account is', account);
        console.log('Signed message is', signedMessage);

        let endpoint = 'https://www.ethbox.org/gov/voting.php';

        let formData = new FormData();
        formData.append('action', 'cast_vote');
        formData.append('voting', proposal.n);
        formData.append('address', account);
        formData.append('signed_msg', signedMessage);
        formData.append('vote', vote);

        // I have no idea what's the response looks like (json or text or both depending on the execution?)
        let response = await fetch(endpoint, { method: 'POST', body: formData });
        return response;
    }

}

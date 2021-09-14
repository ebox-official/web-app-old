import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { GovernanceService } from 'src/app/services/governance.service';

@Component({
    selector: 'app-governance-proposal',
    templateUrl: './governance-proposal.component.html',
    styleUrls: ['./governance-proposal.component.css']
})
export class GovernanceProposalComponent implements OnInit, OnDestroy {

    @Input() proposal;

    alphabet = "abcdefghijklmnopqrstuvwxyz";
    proposalId = `proposal_${Math.random().toString(36).substring(2)}`;
    startDatetime;
    endDatetime;
    selectedChoice;

    chainId;
    isEthereumMainnet;
    selectedAccount;
    isGovernanceReady;

    buttonMessage;
    buttonFunction;
    isButtonDisabled;

    private subscriptions = [];

    constructor(
        private contractServ: ContractService,
        private governanceServ: GovernanceService) { }

    ngOnInit(): void {
        this.startDatetime = new Date(this.proposal.time_start * 1e3).toUTCString().replace("GMT", "UTC");
        this.endDatetime = new Date(this.proposal.time_end * 1e3).toUTCString().replace("GMT", "UTC");

        [
            this.contractServ.chainId$,
            this.contractServ.isEthereumMainnet$,
            this.contractServ.selectedAccount$,
            this.contractServ.isGovernanceReady$
        ].forEach(
            obs => obs.subscribe(
                async () => {

                    // Updating local variables
                    this.chainId = this.contractServ.chainId$.getValue();
                    this.isEthereumMainnet = true; //this.contractServ.isEthereumMainnet$.getValue();
                    this.selectedAccount = this.contractServ.selectedAccount$.getValue();
                    this.isGovernanceReady = true; //this.contractServ.isGovernanceReady$.getValue();

                    // Calculating a message for the user
                    if (!this.chainId || !this.selectedAccount) {
                        this.buttonMessage = 'Please connect your wallet first!';
                        this.buttonFunction = () => this.contractServ.connect();
                        this.isButtonDisabled = false;
                        return;
                    }
                    if (!this.isEthereumMainnet) {
                        this.buttonMessage = 'Wrong network – Please use the Ethereum Mainnet!';
                        this.isButtonDisabled = true;
                        return;
                    }
                    if (!this.isGovernanceReady) {
                        this.buttonMessage = 'Initializing ethbox smart contract...';
                        this.isButtonDisabled = true;
                        return;
                    }

                    // Checking if the proposal has expired
                    if (this.proposal.hasExpired) {
                        this.buttonMessage = 'Voting has finished!';
                        this.isButtonDisabled = true;
                        return;
                    }

                    // Setting and checking if user is eligible
                    this.proposal.isEligible = await this.governanceServ.isEligible({ 
                        votingNumber: this.proposal.n,
                        area: this.proposal.area });
                    if (!this.proposal.isEligible) {
                        this.buttonMessage = 'Not eligible';
                        this.isButtonDisabled = true;
                        return;
                    }
                    
                    // Setting and checking if user has already voted
                    this.proposal.hasVoted = await this.governanceServ.isEligible({ 
                        votingNumber: this.proposal.n,
                        area: this.proposal.area });
                    if (this.proposal.hasVoted) {
                        this.buttonMessage = 'Already voted';
                        this.isButtonDisabled = true;
                        return;
                    }
                    

                    // All checks are passed
                    this.buttonMessage = 'Vote';
                    this.buttonFunction = () => this.governanceServ.vote(
                        this.proposal,
                        this.selectedChoice);
                    this.isButtonDisabled = false;
                }
            )
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    injectVoters(proposal) {
        console.log(proposal);
        let lengthLabel: HTMLElement = document.querySelector("#numberOfVoters");
        let votersList: HTMLElement = document.querySelector("#votersList");
        lengthLabel.innerText = (proposal.votersDetail || { length: 0 }).length;
        votersList.innerHTML = "";
        proposal.votersDetail.forEach(voter => {
            let voterWrapper = document.createElement("DIV");
            voterWrapper.innerHTML = `<li class="bg-eboxdark text-white p-3 rounded-alot mb-3">
    <div class="text-end mb-2">${new Date(voter.time * 1e3).toLocaleDateString()}</div>
    <div class="mb-2">
        <div class="fs-5 fw-bold mb-1">Address</div>
        <div class="text-truncate font-monospace">
            <a href="https://etherscan.io/address/${voter.address}" target="_blank" class="text-reset">
                ${voter.address}
            </a>
        </div>
    </div>
    <div class="mb-3">
        <div class="fs-5 fw-bold mb-1">Signed message</div>
        <div class="text-truncate font-monospace">
            ${voter.signed_msg}
        </div>
    </div>
    <div class="bg-white mx-auto p-3 rounded-alot text-center">
        <div class="text-eboxprimary">
        <div class="mb-2">
            <div class="fs-5 fw-bold mb-1">Voted for</div>
            <div class="display-6 fw-bold">${"abcdefghijklmnopqrstuvwxyz"[voter.vote - 1]}</div>
        </div>
        <div>
            <div class="fs-5 fw-bold mb-1">Voting power</div>
            <div class="display-6 fw-bold">
                ${Number(voter.voting_power).toFixed(0)}
            </div>
        </div>
        </div>
    </div>
</li>`;
            votersList.appendChild(voterWrapper.firstElementChild);
        });
    }

}

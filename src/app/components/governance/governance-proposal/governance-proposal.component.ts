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

    proposalId = `proposal_${Math.random().toString(36).substring(2)}`;
    startDatetime;
    endDatetime;
    selectedChoice;

    chainId;
    isChainSupported;
    selectedAccount;
    isAppReady;

    buttonMessage;
    buttonFunction;
    isButtonDisabled;

    private subscriptions = [];

    constructor(
        private contractServ: ContractService,
        private governanceServ: GovernanceService) { }

    ngOnInit(): void {
        this.startDatetime = new Date(this.proposal.time_start * 1e3).toUTCString();
        this.endDatetime = new Date(this.proposal.time_end * 1e3).toUTCString();

        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$
        ].forEach(
            obs => obs.subscribe(
                async () => {

                    // Updating local variables
                    this.chainId = this.contractServ.chainId$.getValue();
                    this.isChainSupported = this.contractServ.isChainSupported$.getValue();
                    this.selectedAccount = this.contractServ.selectedAccount$.getValue();
                    this.isAppReady = this.contractServ.isAppReady$.getValue();

                    // Calculating a message for the user
                    if (!this.chainId || !this.selectedAccount) {
                        this.buttonMessage = 'Connect your wallet';
                        this.buttonFunction = () => this.contractServ.connect();
                        this.isButtonDisabled = false;
                        return;
                    }
                    if (!this.isChainSupported) {
                        this.buttonMessage = 'Wrong network';
                        this.isButtonDisabled = true;
                        return;
                    }
                    if (!this.isAppReady) {
                        this.buttonMessage = 'Initializing the Smart Contract...';
                        this.isButtonDisabled = true;
                        return;
                    }

                    // Checking if the proposal has expired
                    if (this.proposal.hasExpired) {
                        this.buttonMessage = 'Expired';
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

}

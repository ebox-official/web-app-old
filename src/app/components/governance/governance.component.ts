import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { GovernanceService } from 'src/app/services/governance.service';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';

@Component({
    selector: 'app-governance',
    templateUrl: './governance.component.html',
    styleUrls: ['./governance.component.css']
})
export class GovernanceComponent implements OnInit {

    datetime = new Date().toUTCString().replace("GMT", "UTC");
    governance = [];
    community = [];
    pageData;
    clockTimer;

    constructor(
        private loadingIndicatorServ: LoadingIndicatorService,
        private governanceServ: GovernanceService) { }

    async ngOnInit() {

        this.clockTimer = setInterval(() =>
            this.datetime = (new Date()).toUTCString().replace("GMT", "UTC"),
            1000
        );

        this.loadingIndicatorServ.on();
        Promise.all([
            this.governanceServ.getVotings({ isCommunity: false }),
            this.governanceServ.getVotings({ isCommunity: true })
        ]).then(([governance, community]) => {
            this.governance = this.enrichProposal(governance, false);
            this.community = this.enrichProposal(community, true);
            this.loadingIndicatorServ.off();
        });

        // Append to the body the two modals for eligible users and voters
        let eligibleUsersModalWrapper = document.createElement("DIV");
        eligibleUsersModalWrapper.innerHTML = `<div class="modal fade text-dark" id="eligibleUsersModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-alot">
            <div class="modal-header">
                <h5 class="modal-title">Eligible voters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 text-center">
                    <small>There are <span id="numberOfEligibleUsers"></span> eligible voters.</small>
                </div>
                <ul class="p-0" id="eligibleUsersList"></ul>
            </div>
        </div>
    </div>
</div>`;
        let votersModalWrapper = document.createElement("DIV");
        votersModalWrapper.innerHTML = `<div class="modal fade text-start" id="votersModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-alot">
            <div class="modal-header">
                <h5 class="modal-title">Detailed voting results</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 text-center">
                <small>A total of <span id="numberOfVoters" votes were cast.</small>
                </div>
                <ul class="p-0" id="votersList"></ul>
            </div>
        </div>
    </div>
</div>`;
        document.body.appendChild(eligibleUsersModalWrapper.firstElementChild);
        document.body.appendChild(votersModalWrapper.firstElementChild);
    }

    ngOnDestroy() {
        clearInterval(this.clockTimer);

        // Remove eligible users and voters modals from body
        document.body.removeChild(document.querySelector("#eligibleUsersModal"));
        document.body.removeChild(document.querySelector("#votersModal"));
    }

    private enrichProposal(proposals, isCommunity) {

        for (let p of proposals) {
            p._id = 'proposal_' + Math.random().toString(36).substring(2);
            p._isCollapsed = true;
            p.startDatetime = new Date(p.time_start * 1e3).toUTCString().replace("GMT", "UTC");
            p.endDatetime = new Date(p.time_end * 1e3).toUTCString().replace("GMT", "UTC");
            p.hasExpired = Date.now() > p.time_end * 1e3;

            p.isEligible = false;
            p.hasVoted = false;
            p.eligibleUsers = [];
            p.votersDetail = [];

            this.governanceServ.getVotes({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
            .then(r => p.votes = r);

            this.governanceServ.getVoters({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
            .then(r => p.eligibleUsers = r);

            this.governanceServ.getVotesDetails({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
            .then(r => p.votersDetail = r);
        }

        // I'm reversing the proposals as they come in reverse cronological order
        return proposals.reverse();
    }
 
}

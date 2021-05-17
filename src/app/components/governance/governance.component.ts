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

    votingAreas = [{ title: 'Protocol', area: '' }, { title: 'Community', area: 'community' }];
    pageData;
    clockTimer;
    datetime;

    constructor(
        private loadingIndicatorServ: LoadingIndicatorService,
        private governanceServ: GovernanceService) { }

    async ngOnInit() {

        this.clockTimer = setInterval(() => this.datetime = new Date().toUTCString(), 1000);

        this.pageData = [];
        this.loadingIndicatorServ.on();
        for (let { title, area } of this.votingAreas) {

            // Getting proposals
            let proposals = await this.governanceServ.getVotings({ area });

            // Enriching proposals
            for (let p of proposals) {
                p._id = 'proposal_' + Math.random().toString(36).substring(2);
                p._isCollapsed = true;
                p.startDatetime = new Date(p.time_start * 1e3).toUTCString();
                p.endDatetime = new Date(p.time_end * 1e3).toUTCString();
                p.hasExpired = Date.now() > p.time_end * 1e3;

                p.area = area;
                p.isEligible = false;
                p.hasVoted = false;
                p.votes = await this.governanceServ.getVotes({ votingNumber: p.n , area });
            }

            // Pushing results into pageData
            this.pageData.push({
                _id: 'voting-area_' + Math.random().toString(36).substring(2),
                _isCollapsed: true,
                title,
                proposals
            });
        }
        this.loadingIndicatorServ.off();
    }

    ngOnDestroy() {
        clearInterval(this.clockTimer);
    }
 
}

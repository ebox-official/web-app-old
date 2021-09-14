import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-governance-area',
    templateUrl: './governance-area.component.html',
    styleUrls: ['./governance-area.component.css']
})
export class GovernanceAreaComponent implements OnInit {

    @Input() title;
    @Input() proposals;

    constructor() { }

    ngOnInit(): void {
    }

    injectEligibleUsers(proposal) {
        console.log(proposal);
        let lengthLabel: HTMLElement = document.querySelector("#numberOfEligibleUsers");
        let eligibleUsersList: HTMLElement = document.querySelector("#eligibleUsersList");
        lengthLabel.innerText = (proposal.eligibleUsers || { length: 0 }).length;
        eligibleUsersList.innerHTML = "";
        proposal.eligibleUsers.forEach(voter => {
            let voterWrapper = document.createElement("DIV");
            voterWrapper.innerHTML = `<div class="bg-eboxdark text-white p-3 rounded-alot mb-3">
    <div class="mb-2">
        <div class="fs-5 fw-bold mb-1">Address</div>
        <div class="text-truncate font-monospace">
            <a href="https://etherscan.io/address/${voter.address}" target="_blank" class="text-reset">
                ${voter.address}
            </a>
        </div>
    </div>
    <div class="bg-white mx-auto p-3 rounded-alot text-center">
        <div class="text-eboxprimary">
        <div>
            <div class="fs-5 fw-bold mb-1">Voting power</div>
            <div class="display-6 fw-bold">
                ${Number(voter.voting_power).toFixed(0)}
            </div>
        </div>
        </div>
    </div>
</div>`;
            eligibleUsersList.appendChild(voterWrapper.firstElementChild);
        });
    }

}

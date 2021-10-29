import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/interfaces';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';
import { ContractService } from '../../../services/contract.service';

@Component({
    selector: 'app-box-received',
    templateUrl: './box-received.component.html',
    styleUrls: ['./box-received.component.css']
})
export class BoxReceivedComponent implements OnInit {

    @Input() box: Box;

    password = '';
    isBoxUnlocked;
    isExpanded = false;
    sendTokenBalance;
    requestTokenBalance;
    message = "Loading...";

    constructor(
        public contractServ: ContractService,
        public loadingIndicatorServ: LoadingIndicatorService) { }

    ngOnInit() {
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }

    async onBoxToggle() {

        this.isExpanded = !this.isExpanded;

        // Only updates balances when expanded
        if (this.isExpanded) {
            this.sendTokenBalance = await this.contractServ
                .getTokenBalance(this.box.sendTokenInfo.address);

            if (this.box.requestToken) {
                this.requestTokenBalance = await this.contractServ
                    .getTokenBalance(this.box.requestTokenInfo.address);
            }
            
            // Get the message from Pipedream
            let { message } = await this.contractServ.receiveBoxFromPipedream(this.box);
            this.message = message || "-";
            
            console.log("Opened box", this.box);
        }
    }

    onPasswordInput(value) {

        this.password = value;
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }

}

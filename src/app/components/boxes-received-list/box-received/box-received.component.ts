import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/interfaces';
import { ToasterService } from 'src/app/services/toaster.service';
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

    constructor(
        public contractServ: ContractService,
        private toasterServ: ToasterService) { }

    ngOnInit() {
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }

    onPasswordInput(value) {

        this.password = value;
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }

    async onAcceptClicked() {

        let accountBalance = await this.contractServ.getBalanceOf(this.box.request_token);
        if (Number(accountBalance.wei) < Number(this.box.request_value)) {

            this.toasterServ.toastMessage$.next({
                type: 'danger',
                message: `Your balance is ${accountBalance.decimalValue} ${this.box.requestTokenInfo.symbol} which is not enough to make the exchange.`,
                duration: 'long'
            });
            return;
        }

        this.contractServ.acceptBox(this.box, this.password);
    }

}

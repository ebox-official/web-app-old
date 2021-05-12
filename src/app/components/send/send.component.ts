import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';
import { ContractService } from '../../services/contract.service';
import { ADDRESS_ZERO, ZERO } from '../../constants/various';
import BigNumber from 'bignumber.js';

@Component({
    selector: 'app-send',
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

    password = '';
    recipient;
    sendTokenSelected;
    sendTokenBalance;
    sendValue;
    sendValidationMessage;

    constructor(
        public contractServ: ContractService,
        public loadingIndicatorServ: LoadingIndicatorService) { }

    ngOnInit() {
        this.setSendValidationMessage();
    }

    isRecipientInvalid() {
        return !this.contractServ.isValidAddress(this.recipient);
    }

    isValueInvalid(value) {
        return !/^\d*\.?\d+$/.test(value);
    }

    isValueTooLow(value, decimals) {
        let multiplier = 1 + '0'.repeat(decimals);
        let lowestAllowedDecimal = (new BigNumber(1)).dividedBy(multiplier);
        return (new BigNumber(value)).lt(lowestAllowedDecimal);
    }

    isValueTooHigh(value, decimalValue) {
        return (new BigNumber(value)).gt(decimalValue);
    }

    setSendValidationMessage() {

        if (!this.sendTokenSelected || !this.sendTokenBalance) {
            this.sendValidationMessage = 'Send token is required';
        }
        else if (!this.sendValue) {
            this.sendValidationMessage = 'Send amount is required';
        }
        else if (this.isValueInvalid(this.sendValue)) {
            this.sendValidationMessage = 'Send amount is invalid';
        }
        else if (this.isValueTooLow(this.sendValue, this.sendTokenSelected.decimals)) {
            this.sendValidationMessage = 'Send amount is too low';
        }
        else if (this.isValueTooHigh(this.sendValue, this.sendTokenBalance.decimalValue)) {
            this.sendValidationMessage = 'Send amount is too high';
        }
        else {
            this.sendValidationMessage = '';
        }
    }

    isSendButtonDisabled() {
        return !this.recipient
            || this.isRecipientInvalid()
            || !this.sendTokenSelected
            || !this.sendTokenBalance
            || !this.sendValue
            || this.isValueInvalid(this.sendValue)
            || this.isValueTooLow(this.sendValue, this.sendTokenSelected.decimals)
            || this.isValueTooHigh(this.sendValue, this.sendTokenBalance.decimalValue)
            || this.loadingIndicatorServ.isLoading$.getValue();
    }

    onSendTokenBalanceUpdated(balance) {
        this.sendTokenBalance = balance;
        this.setSendValidationMessage();
    }

    sendBox() {

        this.contractServ.createBox({
            password: this.password,
            recipient: this.recipient,
            sender: this.contractServ.selectedAccount$.getValue(),
            jsDate: new Date(),
            sendTokenAddress: this.sendTokenSelected.address,
            sendDecimalValue: this.sendValue,
            requestTokenAddress: ADDRESS_ZERO,
            requestDecimalValue: ZERO
        });

        console.log('Passphrase is', this.password);
        console.log('Recipient is', this.recipient);
        console.log('Send token address is', this.sendTokenSelected.address);
        console.log('Send amount is', this.sendValue);
    }

}

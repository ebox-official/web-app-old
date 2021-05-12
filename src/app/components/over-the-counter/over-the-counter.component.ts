import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';
import { ContractService } from '../../services/contract.service';
import BigNumber from 'bignumber.js';

@Component({
    selector: 'app-over-the-counter',
    templateUrl: './over-the-counter.component.html',
    styleUrls: ['./over-the-counter.component.css']
})
export class OverTheCounterComponent implements OnInit {

    password = '';
    recipient;
    sendTokenSelected;
    sendTokenBalance;
    sendValue;
    sendValidationMessage;
    requestTokenSelected;
    requestValue;
    requestValidationMessage;

    constructor(
        public contractServ: ContractService,
        public loadingIndicatorServ: LoadingIndicatorService) { }

    ngOnInit() {
        this.setSendValidationMessage();
        this.setRequestValidationMessage();
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

    setRequestValidationMessage() {

        if (!this.requestTokenSelected) {
            this.requestValidationMessage = 'Request token is required';
        }
        else if (!this.requestValue) {
            this.requestValidationMessage = 'Request amount is required';
        }
        else if (this.isValueInvalid(this.requestValue)) {
            this.requestValidationMessage = 'Request amount is invalid';
        }
        else if (this.isValueTooLow(this.requestValue, this.requestTokenSelected.decimals)) {
            this.requestValidationMessage = 'Request amount is too low';
        }
        else {
            this.requestValidationMessage = '';
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
            || !this.requestTokenSelected
            || !this.requestValue
            || this.isValueInvalid(this.requestValue)
            || this.isValueTooLow(this.requestValue, this.requestTokenSelected.decimals)
            || this.loadingIndicatorServ.isLoading$.getValue();
    }

    onSendTokenBalanceUpdated(balance) {
        this.sendTokenBalance = balance;
        this.setSendValidationMessage();
    }

    onRequestTokenSelected(token) {
        this.requestTokenSelected = token;
        this.setRequestValidationMessage();
    }

    sendBox() {

        this.contractServ.createBox({
            password: this.password,
            recipient: this.recipient,
            sender: this.contractServ.selectedAccount$.getValue(),
            jsDate: new Date(),
            sendTokenAddress: this.sendTokenSelected.address,
            sendDecimalValue: this.sendValue,
            requestTokenAddress: this.requestTokenSelected.address,
            requestDecimalValue: this.requestValue
        });

        console.log('Recipient is', this.recipient);
        console.log('Passphrase is', this.password);
        console.log('Send token address is', this.sendTokenSelected.address);
        console.log('Send amount is', this.sendValue);
        console.log('Request token address is', this.requestTokenSelected.address);
        console.log('Request amount is', this.requestValue);
    }

}

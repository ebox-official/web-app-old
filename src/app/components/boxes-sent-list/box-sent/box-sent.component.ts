import { Component, Input } from '@angular/core';
import { Box } from 'src/app/interfaces';
import { ContractService } from '../../../services/contract.service';

@Component({
    selector: 'app-box-sent',
    templateUrl: './box-sent.component.html',
    styleUrls: ['./box-sent.component.css']
})
export class BoxSentComponent {

    @Input() box: Box;

    constructor(public contractServ: ContractService) { }

}

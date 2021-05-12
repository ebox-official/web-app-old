import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-staking-item',
    templateUrl: './staking-item.component.html',
    styleUrls: ['./staking-item.component.css']
})
export class StakingItemComponent {

    @Input() data;
    @Input() special;

    isClosed = false;

    constructor() { }

}

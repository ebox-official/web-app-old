import { Component, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-bg-changer',
    templateUrl: './bg-changer.component.html',
    styleUrls: ['./bg-changer.component.css']
})
export class BgChangerComponent {

    @Input() imgSrc;

    constructor() { }

}

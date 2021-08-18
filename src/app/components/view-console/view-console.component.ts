import { Component, OnInit } from '@angular/core';
import { ViewConsoleService } from 'src/app/services/view-console.service';

@Component({
    selector: 'app-view-console',
    templateUrl: './view-console.component.html',
    styleUrls: ['./view-console.component.css']
})
export class ViewConsoleComponent implements OnInit {

    messages;

    constructor(private viewConsoleServ: ViewConsoleService) { }

    ngOnInit(): void {
        this.messages = this.viewConsoleServ.messages;
        // setInterval(() => this.viewConsoleServ.log("I like ice cream"), 1000);
    }

}

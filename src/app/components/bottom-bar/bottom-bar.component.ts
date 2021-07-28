import { Component } from '@angular/core';

@Component({
    selector: 'app-bottom-bar',
    templateUrl: './bottom-bar.component.html',
    styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {

    darkMode = false;

    constructor() { }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        let html = document.querySelector("html");
        if (this.darkMode) {
            html.setAttribute("theme", "dark-mode");
        } else {
            html.setAttribute("theme", "light-mode");
        }
    }

}

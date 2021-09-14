import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'ethbox-dapp';

  constructor(
    public contractServ: ContractService,
    public router: Router
  ) { }

  ngAfterViewInit() {
    let menuTrigger: any = document.querySelector("#menu-trigger");
    let mainContent = document.querySelector("#main-content");
    menuTrigger.addEventListener("click", () => {
  
      function uncheckTrigger() {
        menuTrigger.checked = false;
        mainContent.removeEventListener("click", uncheckTrigger);
      }
      
      if (menuTrigger.checked) {
        mainContent.addEventListener("click", uncheckTrigger);
      } else {
        mainContent.removeEventListener("click", uncheckTrigger);
      }
    });
  }

}

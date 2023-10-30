import { Component } from '@angular/core';
import {IDropDownListOption} from "./components/drop-down-list/drop-down-option/drop-down-option.component";

@Component({
  selector: 'client-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  moreOptions: IDropDownListOption[] = [
    { text: "Delivery" },
    { text: "Return" },
    { text: "Trade-in" },
    { text: "Blog" },
    { text: "Comfy-help" }
  ];

  supportOptions: IDropDownListOption[] = [
    { text: "telegram" },
    { text: "viber" },
    { text: "phone" },
    { text: "online chat" }
  ];
}

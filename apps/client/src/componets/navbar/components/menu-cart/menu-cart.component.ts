import {Component, Input} from '@angular/core';

@Component({
  selector: 'client-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.scss']
})
export class MenuCartComponent {
  @Input() size: number = 32;
}

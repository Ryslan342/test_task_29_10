import {Component, Input} from '@angular/core';

@Component({
  selector: 'client-price-object',
  templateUrl: './price-object.component.html',
  styleUrls: ['./price-object.component.scss']
})
export class PriceObjectComponent {
  @Input() price?: { actualPrice: number, oldPrice?: number } = { actualPrice: 0 };
  protected readonly Math = Math;

  get stock() {
    if (!this.price || !this.price.oldPrice) return 0;
    return Math.floor( (this.price?.actualPrice - this.price?.oldPrice) / this.price?.actualPrice * 100 )
  }
}

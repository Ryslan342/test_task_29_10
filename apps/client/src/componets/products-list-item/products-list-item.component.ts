import {Component, Input} from '@angular/core';


export interface IProduct {
  name: string;
  img: string;
  commentsCount: number;
  goodFeedbackPercents: number;
  price: {
    actualPrice: number;
    oldPrice?: number;
  }
}

@Component({
  selector: 'client-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent {
  @Input({ required: true }) product?: IProduct;
}

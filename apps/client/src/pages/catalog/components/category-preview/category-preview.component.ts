import {Component, Input} from '@angular/core';
import {IProduct} from "../../../../componets/products-list-item/products-list-item.component";

export interface ICategoryPreview {
  title: string;
  products: IProduct[]
}

@Component({
  selector: 'client-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent {
  @Input() cat: ICategoryPreview = { title: "null", products: [] }
}

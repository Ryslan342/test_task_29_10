import { Component } from '@angular/core';
import {ComponentsModule} from "../../componets/components.module";
import {CatalogModule} from "./catalog.module";
import {ICategoryPreview} from "./components/category-preview/category-preview.component";

@Component({
  standalone: true,
  selector: 'api-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [
    ComponentsModule,
    CatalogModule
  ]
})
export class CatalogComponent {
  firstCategory: ICategoryPreview = {
    title: "Phones",
    products: [
      {
        name: "Apple iPhone 14 Pro Max 256Gb Purple",
        img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/catalog/product/i/p/iphone-14-pro-storage-select-202209-6-7inch-deeppurple_1.jpg/w_320",
        goodFeedbackPercents: 90,
        commentsCount: 320,
        price: {
          actualPrice: 859,
          oldPrice: 999
        }
      },
      {
        name: "Xiaomi Redmi Note 12 Pro 8/256Gb Graphite Gray",
        img: "https://skin.comfy.ua/media/catalog/product/k/6/k6a_black_back_1_.jpg",
        goodFeedbackPercents: 75,
        commentsCount: 31,
        price: {
          actualPrice: 399,
          oldPrice: 499
        }
      },
      {
        name: "Apple iPhone 15 128Gb Black",
        img: "https://skin.comfy.ua/media/catalog/product/i/p/iphone_15_black_pdp_image_position-1__ww-en_1__2.jpg",
        goodFeedbackPercents: 90,
        commentsCount: 320,
        price: {
          actualPrice: 799
        }
      }
    ]
  };
  secondCategory: ICategoryPreview = {
    title: "Laptops",
    products: [
      {
        name: "Asus VivoBook 15 X1500EA-BQ3659 Indie Black",
        img: "https://skin.comfy.ua/media/catalog/product/c/5/c519f9371_233670_b_1_.jpg",
        goodFeedbackPercents: 75,
        commentsCount: 31,
        price: {
          actualPrice: 399,
          oldPrice: 499
        }
      },
      {
        name: "Apple New MacBook Air M1 13.3'' 256Gb MGN63 Space Grey 2020",
        img: "https://skin.comfy.ua/media/catalog/product/w/w/wwru_macbook-air_q121_spacegray_pdp-image-1.jpg",
        goodFeedbackPercents: 90,
        commentsCount: 320,
        price: {
          actualPrice: 799
        }
      }
    ]
  };
}

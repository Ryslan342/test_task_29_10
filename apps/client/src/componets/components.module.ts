import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {LanguageSelectComponent} from "./navbar/components/language-select/language-select.component";
import {DropDownListComponent} from "./navbar/components/drop-down-list/drop-down-list.component";
import { CategoriesSelectComponent } from './navbar/components/categories-select/categories-select.component';
import { MenuCartComponent } from './navbar/components/menu-cart/menu-cart.component';
import {IconComponent} from "./icon/icon.component";
import { MenuSearchComponent } from './navbar/components/menu-search/menu-search.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { FooterComponent } from './footer/footer.component';
import { FastInfoItemComponent } from './footer/fast-info-item/fast-info-item.component';
import { PriceObjectComponent } from './price-object/price-object.component';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesSelectComponent,
    MenuCartComponent,
    MenuSearchComponent,
    ProductsListItemComponent,
    FooterComponent,
    FastInfoItemComponent,
    PriceObjectComponent,
    ProductFeedbackComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    LanguageSelectComponent,
    DropDownListComponent,
    IconComponent
  ],
  exports: [
    NavbarComponent,
    IconComponent,
    FooterComponent,
    ProductsListItemComponent
  ]
})
export class ComponentsModule { }

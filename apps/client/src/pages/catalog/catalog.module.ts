import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CategoryPreviewComponent } from './components/category-preview/category-preview.component';
import {IconComponent} from "../../componets/icon/icon.component";
import {ComponentsModule} from "../../componets/components.module";

@NgModule({
  imports: [
    CommonModule,
    IconComponent,
    ComponentsModule
  ],
  exports: [
    CategoryPreviewComponent
  ],
  declarations: [
    CategoryPreviewComponent
  ]
})
export class CatalogModule {

}

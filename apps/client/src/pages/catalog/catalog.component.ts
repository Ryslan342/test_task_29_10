import { Component } from '@angular/core';
import {ComponentsModule} from "../../componets/components.module";
import {CatalogModule} from "./catalog.module";

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
}

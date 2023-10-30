import {Module} from "@nestjs/common";
import {CategoriesService} from "./services/categories.service";

@Module({
  imports: [],
  providers: [
    CategoriesService
  ],
  exports: [
    CategoriesService
  ]
})
export class CoreModule {
}

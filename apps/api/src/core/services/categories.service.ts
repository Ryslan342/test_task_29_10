import { Injectable } from "@nestjs/common";
import {MikroORM} from "@mikro-orm/core";
import {Category} from "../../data/models/category";

@Injectable()
export class CategoriesService {
  constructor(private readonly _orm: MikroORM) {
  }

  async buildCategoriesTreeAsync() {
    const em = this._orm.em.fork();

    return em.find(Category, {
      parent: null
    }, {
      populate: ["subcategories.subcategories.subcategories"]
    });
  }
}

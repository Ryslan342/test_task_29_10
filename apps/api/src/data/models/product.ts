import {Collection, Entity, Index, ManyToOne, OneToMany, PrimaryKey, Property, t} from "@mikro-orm/core";
import {Category} from "./category";
import {ProductAttribute} from "./product-attribute";

@Entity()
export class Product {
  @PrimaryKey()
  id: number;

  @ManyToOne(() => Category, { onDelete: "cascade", index: true })
  category: Category;

  @OneToMany(() => ProductAttribute, it => it.product)
  attributes: Collection<ProductAttribute> = new Collection<ProductAttribute>(this);

  @Property()
  name: string;

  @Property()
  img: string;

  @Property()
  actualPrice: number;

  @Property({ nullable: true })
  oldPrice?: number;

  @Property()
  fastDelivery: boolean = false;

  /*
  * The following data is used for quick display purposes only.
  * Stored in a separate collection. When adding/deleting, you need to update the value.
  */

  @Property({ nullable: true })
  avgStars?: number;

  @Property({ nullable: true })
  commentsCount?: number;
}

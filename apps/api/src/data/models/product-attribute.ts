import {Entity, Index, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {Product} from "./product";

@Entity()
export class ProductAttribute {
  @PrimaryKey()
  id: number

  @ManyToOne(() => Product, { onDelete: "cascade", index: true })
  product: Product;

  @Property()
  name: string;

  @Property()
  value: string;
}

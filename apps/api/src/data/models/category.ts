import {Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
export class Category {
  @PrimaryKey()
  id: number;

  @ManyToOne(() => Category, { onDelete: "cascade", mapToPk: true, nullable: true })
  parent: Category;

  @OneToMany(() => Category, cat => cat.parent, {})
  subcategories: Collection<Category> = new Collection<Category>(this);

  @Property()
  title: string;
}

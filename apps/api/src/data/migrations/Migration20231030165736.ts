import { Migration } from '@mikro-orm/migrations';

export class Migration20231030165736 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "products" ("id" serial primary key, "categories_id" int not null, "name" varchar(255) not null, "img" varchar(255) not null, "actual_price" int not null, "old_price" int null, "fast_delivery" boolean not null default false, "avg_stars" int null, "comments_count" int null);');
    this.addSql('create index "products_categories_id_index" on "products" ("categories_id");');

    this.addSql('create table "product_attributes" ("id" serial primary key, "products_id" int not null, "name" varchar(255) not null, "value" varchar(255) not null);');
    this.addSql('create index "product_attributes_products_id_index" on "product_attributes" ("products_id");');

    this.addSql('alter table "products" add constraint "products_categories_id_foreign" foreign key ("categories_id") references "categories" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "product_attributes" add constraint "product_attributes_products_id_foreign" foreign key ("products_id") references "products" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "product_attributes" drop constraint "product_attributes_products_id_foreign";');

    this.addSql('drop table if exists "products" cascade;');

    this.addSql('drop table if exists "product_attributes" cascade;');
  }

}

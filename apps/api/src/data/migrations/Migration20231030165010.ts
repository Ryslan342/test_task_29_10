import { Migration } from '@mikro-orm/migrations';

export class Migration20231030165010 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "categories" ("id" serial primary key, "parents_id" int null, "title" varchar(255) not null);');

    this.addSql('alter table "categories" add constraint "categories_parents_id_foreign" foreign key ("parents_id") references "categories" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "categories" drop constraint "categories_parents_id_foreign";');

    this.addSql('drop table if exists "categories" cascade;');
  }

}

import { LoadStrategy, UnderscoreNamingStrategy } from "@mikro-orm/core";
import pluralize from "pluralize";
import { join } from "path";
import { NestFactory } from "@nestjs/core";
import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";
import { Configuration } from "../configuration/configuration";
import { ConfigurationModule } from "../configuration/configuration.module";
import {Category} from "./models/category";
import {Product} from "./models/product";
import {ProductAttribute} from "./models/product-attribute";

module.exports = new Promise(async resolve => {
  const configCtx = await NestFactory.createApplicationContext(ConfigurationModule);
  const config = configCtx.get(Configuration);

  resolve({
    entities: [
      Category,
      Product,
      ProductAttribute
    ],
    dbName: config.postgresqlDb.name,
    type: "postgresql",
    password: config.postgresqlDb.password,
    user: config.postgresqlDb.user,
    host: config.postgresqlDb.host,
    port: config.postgresqlDb.port,
    namingStrategy: class extends UnderscoreNamingStrategy {
      classToTableName(entityName: string): string {
        return pluralize(super.classToTableName(entityName));
      }
    },
    loadStrategy: LoadStrategy.JOINED,
    migrations: {
      tableName: "migrations", // bannerName of database table with log of executed transactions
      path: join(__dirname, "migrations"), // path to the folder with migrations
      pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
      transactional: true, // wrap each migration in a transaction
      allOrNothing: true, // wrap all migrations in master transaction
      safe: false, // allow to disable table and column dropping
      emit: "ts"
    }
  } as MikroOrmModuleSyncOptions);
});

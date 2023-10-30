import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import * as mikroOrmConfig from "./mikro-orm.config";

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => (mikroOrmConfig as any).default
    })
  ]
})
export class DataModule {}

import {Global, Module} from '@nestjs/common';
import {DataModule} from "./data/data.module";
import {CoreModule} from "./core/core.module";

@Global()
@Module({
  imports: [
    DataModule,
    CoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

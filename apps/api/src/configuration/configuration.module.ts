import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Configuration } from "./configuration";
import { postgresConfig } from "./configuration.resolvers";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.default"],
      load: [postgresConfig]
    })
  ],
  providers: [Configuration],
  exports: [Configuration]
})
export class ConfigurationModule {}

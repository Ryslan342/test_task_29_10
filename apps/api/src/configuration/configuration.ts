import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import {postgresConfig} from "./configuration.resolvers";

@Injectable()
export class Configuration {
  constructor(
    @Inject(postgresConfig.KEY)
    private _postgresqlDbConfig: ConfigType<typeof postgresConfig>
  ) {}

  get postgresqlDb(): ConfigType<typeof postgresConfig> {
    return this._postgresqlDbConfig;
  }

}

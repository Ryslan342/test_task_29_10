import { registerAs } from "@nestjs/config";
import * as process from "process";

export const postgresConfig = registerAs("postgres", () => ({
  name: process.env.POSTGRES_DBNAME || "test_task_29_10",
  type: "postgresql",
  user: process.env.POSTGRES_USER ?? "root",
  password: process.env.POSTGRES_PASS ?? "root",
  host: process.env.POSTGRES_HOST ?? "postgres",
  port: process.env.POSTGRES_PORT ?? 5432
}));

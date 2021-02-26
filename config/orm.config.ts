import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { registerAs } from "@nestjs/config";

interface ormConfig {
  environment: string;
  database: TypeOrmModuleOptions;
}

let config = {};
const environments = {
  production: {
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@localhost/logistic_dev",
    synchronize: false,
    logging: true,
    cli: {
      migrationsDir: "src/migration",
      subscribersDir: "dist/subscriber",
    },
    ssl: true,
  },
  test: {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "skore_test",
    synchronize: false,
    logging: false,
    entities: [`src/**/*.entity{.ts,.js}`],
    migrations: [`migration/**/*{.ts,.js}`],
    subscribers: [`src/subscriber/**/*{.ts,.js}`],
    cli: {
      migrationsDir: `${__dirname}/migration`,
      subscribersDir: "src/subscriber",
    },
  },
};

if (process.env.NODE_ENV) {
  config = environments[process.env.NODE_ENV];
} else {
  config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "skore_dev",
    synchronize: false,
    logging: true,
    migrations: [],
    subscribers: [`subscriber/**/*{.ts,.js}`],
    cli: {
      migrationsDir: `./migration`,
      subscribersDir: "src/subscriber",
    },
  };
}

export default registerAs("database", () => config);

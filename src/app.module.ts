import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule, AuthenticationMiddleware } from "@skore/auth";
import { UserModule } from "./user/user.module";
import { ProfileModule } from "./profile/profile.module";
import { MailerModule } from "@skore/mailer";
import { ScoreModule } from "./score/score.module";
import { TaskModule } from './task/task.module';
import ormConfig from "../config/orm.config";
import authConfig from "../config/auth.config";
import mailerConfig from "../config/mailer.config";

interface appConfigResult {
  apolloServerConfig: {
    introspection?: boolean;
    playground?: boolean;
  };
}

const appConfig = (): appConfigResult => {
  if (process.env.NODE_ENV === "test") {
    return { apolloServerConfig: {} };
  }
  return {
    apolloServerConfig: {
      introspection: true,
      playground: true,
    },
  };
};

@Module({
  imports: [
    ConfigModule.forFeature(authConfig),
    ConfigModule.forFeature(ormConfig),
    ConfigModule.forFeature(mailerConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: async (config: ConfigService) => {
        return {
          ...config.get("database"),
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      context: ({ req }) => {
        return { req };
      },
      ...appConfig().apolloServerConfig,
    }),
    ProfileModule,
    MailerModule,
    ScoreModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

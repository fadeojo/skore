import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { AppModule } from "../app.module";
import {
  ApolloServerTestClient,
  createTestClient,
} from "apollo-server-testing";
import ormConfig from "../../config/orm.config";
import { AuthGuard } from "@skore/auth";
import { MockAuthGuard } from "@skore/auth/auth.guard.mock";
import { INestApplication } from "@nestjs/common";

interface TestSetup {
  client: ApolloServerTestClient;
  moduleFixture: TestingModule;
  app: INestApplication;
}

export const user = {
  aud: "aud",
  email: "fadeojo@gmail.com",
  email_verified: false,
  exp: 1569562396,
  family_name: "Adeojo",
  given_name: "Olufemi",
  iat: 1569526396,
  iss: "iss",
  name: "Olufemi Adeojo",
  nickname: "Femi",
  picture: "picture",
  sub: "auth0|5d2de91766c7e60c7d8bcea2",
  updated_at: "2019-09-26T19:33:16.762Z",
};

export async function testSetup(): Promise<TestSetup> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({
        load: [ormConfig],
      }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (config: ConfigService) => config.get("database"),
        inject: [ConfigService],
      }),
      GraphQLModule.forRoot({
        autoSchemaFile: "schema.gql",
        context: () => ({ req: { user } }),
      }),
      AppModule,
    ],
  })
    .overrideGuard(AuthGuard)
    .useValue(MockAuthGuard)
    .compile();

  const app = moduleFixture.createNestApplication();
  await app.init();

  const module: GraphQLModule = moduleFixture.get<GraphQLModule>(GraphQLModule);
  // apolloServer is protected, we need to cast module to any to get it
  const client = createTestClient((module as any).apolloServer);

  return { client, moduleFixture, app };
}

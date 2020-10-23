import { INestApplication } from '@nestjs/common';
import { ApolloServerTestClient } from 'apollo-server-testing';
import { GET_USER } from './testQueries';
import { testSetup } from '../../testUtils/setup';

describe('Profile Resolver', () => {
  let app: INestApplication;
  let apolloClient: ApolloServerTestClient;

  beforeAll(async () => {
    const { client } = await testSetup();
    apolloClient = client;
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return user', async () => {
    const { query } = apolloClient;
    const result = await query({
      query: GET_USER,
      variables: {},
    });
    expect(result.data.getUser).toEqual({
      email: 'fadeojo@gmail.com',
      aud: 'aud',
      exp: 1569562396,
      iat: 1569526396,
      iss: 'iss',
      name: 'Olufemi Adeojo',
      nickname: 'Femi',
      picture: 'picture',
      sub: 'auth0|5d2de91766c7e60c7d8bcea2',
    });
    expect(true).toBeTruthy();
  });
});

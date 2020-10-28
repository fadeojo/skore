import { ProfileService } from '../profile.service';
import { AccountType, Profile } from '../profile.entity';
import { ApolloServerTestClient } from 'apollo-server-testing';
import { Repository } from 'typeorm';
import {
  getProfileQuery,
  createProfile,
  updateProfile,
  deleteProfile,
} from './gql.test.utils';
import { CreateProfileInputRepositoryDTO } from '../dto/profile.dto';
import { testSetup } from '../../testUtils/setup';

describe('ProfileResolver', () => {
  let service: ProfileService;
  let apolloClient: ApolloServerTestClient;
  let repository: Repository<Profile>;

  const userId = '5d2de91766c7e60c7d8bcea2';

  const testProfile: CreateProfileInputRepositoryDTO = {
    firstName: 'Femi',
    lastName: 'Adeojo',
    phone: '6131231234',
    accountType: AccountType.SHIPPER,
    businessName: 'some business name',
    industry: 'industry',
    userId,
    city: 'Ottawa',
    country: 'Canada',
    line: '26 Auriga Drive',
    placeId: '12345',
    postalCode: 'A1A 1A1',
    state: 'ON',
    location: {
      type: 'Point',
      coordinates: [-74.111111, 45.111111],
    },
  };

  beforeAll(async () => {
    const { client, moduleFixture } = await testSetup();
    service = moduleFixture.get<ProfileService>(ProfileService);
    repository = moduleFixture.get('ProfileRepository');

    // apolloServer is protected, we need to cast module to any to get it
    apolloClient = client;
  });

  afterEach(async () => {
    await repository.query(`DELETE FROM profile;`);
    // const conn = getConnection();
    // return conn.close();
  });

  it('should get profile', async () => {
    const createdProfile = await service.createProfile(testProfile);
    const { query } = apolloClient;

    const result = await query(getProfileQuery);
    expect(result.data.getProfile).toEqual({
      id: `${createdProfile.id}`,
      userId: '5d2de91766c7e60c7d8bcea2',
      firstName: 'Femi',
      lastName: 'Adeojo',
      phone: '6131231234',
      businessName: 'some business name',
      industry: 'industry',
      accountType: 'SHIPPER',
      createdAt: `${new Date(createdProfile.createdAt).getTime()}`,
      updatedAt: `${new Date(createdProfile.updatedAt).getTime()}`,
      line: '26 Auriga Drive',
      lineAlt: null,
      city: 'Ottawa',
      state: 'ON',
      postalCode: 'A1A 1A1',
      placeId: '12345',
      country: 'Canada',
      location: {
        coordinates: [-74.111111, 45.111111],
        type: 'Point',
      },
    });
  });

  it('should create a profile', async () => {
    const { mutate } = apolloClient;
    const result = await mutate(createProfile);
    expect(result['data']['createProfile']).toEqual({
      id: `${result['data']['createProfile']['id']}`,
      userId,
      firstName: 'Femi',
      lastName: 'Adeojo',
      phone: '6131231234',
      businessName: 'some business name',
      industry: 'industry',
      accountType: 'SHIPPER',
      createdAt: result['data']['createProfile']['createdAt'],
      updatedAt: result['data']['createProfile']['updatedAt'],
      line: '26 Auriga Drive',
      lineAlt: null,
      city: 'Ottawa',
      state: 'ON',
      postalCode: 'A1A 1A1',
      placeId: '12345',
      country: 'Canada',
      location: {
        coordinates: [-74.111111, 45.111111],
        type: 'Point',
      },
    });
  });

  it('should update an uncreated profile with error', async () => {
    const { mutate } = apolloClient;
    const result = await mutate(updateProfile);
    expect(result['errors'][0].message).toEqual(
      `profile not found for user with id:${testProfile.userId}`,
    );
  });

  it('should update a profile', async () => {
    const { mutate } = apolloClient;
    const createdProfile = await service.createProfile(testProfile);
    const result = await mutate(updateProfile);
    const updatedProfile = await service.getProfile(createdProfile.userId);
    expect(result.data.updateProfile).toEqual({
      id: `${createdProfile.id}`,
      userId: '5d2de91766c7e60c7d8bcea2',
      firstName: 'updated firstName',
      lastName: 'updated lastName',
      phone: '6131231235',
      businessName: 'updated business name',
      industry: 'updated industry',
      accountType: 'SHIPPER',
      createdAt: `${new Date(createdProfile.createdAt).getTime()}`,
      updatedAt: `${new Date(updatedProfile.updatedAt).getTime()}`,
      line: '26 Auriga Drive updated',
      lineAlt: null,
      city: 'updated City',
      state: 'updated province',
      postalCode: 'B2B 1A1',
      placeId: 'updated 12367',
      country: 'updated Country',
      location: {
        coordinates: [-74.111112, 45.111112],
        type: 'Point',
      },
    });
  });

  it('should delete an uncreated  profile with error', async () => {
    const { mutate } = apolloClient;
    const result = await mutate(deleteProfile);
    expect(result['errors'][0].message).toEqual(
      `profile not found for user with id:${testProfile.userId}`,
    );
  });

  it('should delete a profile', async () => {
    const { mutate } = apolloClient;
    const createdProfile = await service.createProfile(testProfile);
    const result = await mutate(deleteProfile);
    expect(result.data.deleteProfile).toEqual({
      id: `${createdProfile.id}`,
      userId: '5d2de91766c7e60c7d8bcea2',
      firstName: 'Femi',
      lastName: 'Adeojo',
      phone: '6131231234',
      businessName: 'some business name',
      industry: 'industry',
      accountType: 'SHIPPER',
      createdAt: `${new Date(createdProfile.createdAt).getTime()}`,
      updatedAt: `${new Date(createdProfile.updatedAt).getTime()}`,
      line: '26 Auriga Drive',
      lineAlt: null,
      city: 'Ottawa',
      state: 'ON',
      postalCode: 'A1A 1A1',
      placeId: '12345',
      country: 'Canada',
      location: {
        coordinates: [-74.111111, 45.111111],
        type: 'Point',
      },
    });
  });
});
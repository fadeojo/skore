import axios from "axios";
import { ProfileService } from "../profile.service";
import { Repository } from "typeorm";
import { Profile, AccountType } from "../profile.entity";
import { CreateProfileInputRepositoryDTO } from "../dto/profile.dto";
import { updatedProfileFactory } from "./profileTest.dto";
import { testSetup } from "../../testUtils/setup";
import { plainToClass } from "class-transformer";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ProfileService", () => {
  let service: ProfileService;
  let repository: Repository<Profile>;
  mockedAxios.post.mockImplementation(() =>
    Promise.resolve({ data: { _id: "5d2de91766c7e60c7d8bcea2" } })
  );

  beforeAll(async () => {
    const { moduleFixture } = await testSetup();
    service = moduleFixture.get<ProfileService>(ProfileService);
    repository = moduleFixture.get("ProfileRepository");
  });
  afterEach(async () => {
    await repository.query(`DELETE FROM profile;`);
  });
  const testProfile: CreateProfileInputRepositoryDTO = {
    firstName: "Femi",
    lastName: "Adeojo",
    phone: "6131231234",
    accountType: AccountType.ADMIN,
    city: "Ottawa",
    country: "Canada",
    line: "26 Auriga Drive",
    lineAlt: null,
    placeId: "12345",
    postalCode: "A1A 1A1",
    state: "ON",
    location: {
      type: "Point",
      coordinates: [-74.111111, 45.111111],
    },
    email: "test@test.io",
    password: "9a$$w0rD",
  };

  it("should be defined", async () => {
    expect(service).toBeDefined();
  });

  it("should get a profile by id", async () => {
    const createdProfile = await service.createProfile(testProfile);
    createdProfile.lineAlt = null;
    const profile = await service.getProfile(`${createdProfile.userId}`);

    expect({ ...createdProfile, scores: [] }).toEqual(profile);
  });

  it("should create a profile", async () => {
    const profile = await service.createProfile({ ...testProfile, scores: [] });
    const expectedProfile = new Profile({
      ...testProfile,
      id: profile.id,
      userId: profile.userId,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
      deletedAt: null,
      scores: [],
    });
    expect(profile).toEqual(expectedProfile);
  });

  it("should update a profile", async () => {
    const profile = await service.createProfile(testProfile);
    const updatedProfile = await service.updateProfile(
      updatedProfileFactory,
      profile.userId
    );
    const testUpdatedProfile = new Profile({
      ...profile,
      ...updatedProfileFactory,
      updatedAt: updatedProfile.updatedAt,
      lineAlt: null,
      deletedAt: null,
      scores: [],
    });

    expect(updatedProfile).toEqual(testUpdatedProfile);
  });

  it("should delete a profile", async () => {
    const profile = await service.createProfile(testProfile);
    await service.deleteProfile(profile.userId);
    await expect(async () => {
      await service.getProfile(`${profile.userId}`);
    }).rejects.toThrow();
  });
});

import axios from "axios";
import { Score } from "./entities/score.entity";
import { ScoreService } from "./score.service";
import { Repository } from "typeorm";
import { testSetup } from "../testUtils/setup";
import { ProfileService } from "../profile/profile.service";
import { CreateProfileInputRepositoryDTO } from "../profile/dto/profile.dto";
import { AccountType } from "../profile/profile.entity";
import { plainToClass } from "class-transformer";
import { CreateScoreInput } from "./dto/create-score.input";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

describe("ScoreService", () => {
  let service: ScoreService;
  let profileService: ProfileService;
  let repository: Repository<Score>;
  mockedAxios.post.mockImplementation(() =>
    Promise.resolve({ data: { _id: "5d2de91766c7e60c7d8bcea2" } })
  );

  beforeAll(async () => {
    const { moduleFixture } = await testSetup();
    service = moduleFixture.get<ScoreService>(ScoreService);
    profileService = moduleFixture.get<ProfileService>(ProfileService);
    repository = moduleFixture.get("ProfileRepository");
  });
  afterEach(async () => {
    await repository.query(`DELETE FROM score;`);
    await repository.query(`DELETE FROM profile;`);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create a score for a profile (Player)", async () => {
    const createdProfile = await profileService.createProfile(testProfile);
    createdProfile.lineAlt = null;
    const scoreInput = plainToClass(CreateScoreInput, {
      name: "Friday",
      description: "Friday",
      value: 5,
      profile_id: createdProfile.id,
    });
    const score = await service.create(createdProfile, scoreInput);
    expect(
      plainToClass(Score, {
        id: score.id,
        name: "Friday",
        description: "Friday",
        value: 5,
        profile_id: createdProfile.id,
      })
    ).toEqual(score);
  });
});

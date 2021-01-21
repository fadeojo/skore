import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";
import { ProfileService } from "../profile/profile.service";
import { testSetup } from "../testUtils/setup";
import { Score } from "./entities/score.entity";
import { ScoreResolver } from "./score.resolver";
import { ScoreService } from "./score.service";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ScoreResolver", () => {
  let resolver: ScoreResolver;
  let service: ScoreService;
  let repository: Repository<Score>;

  mockedAxios.post.mockImplementation(() =>
    Promise.resolve({ data: { _id: "5d2de91766c7e60c7d8bcea2" } })
  );

  beforeEach(async () => {
    const { moduleFixture } = await testSetup();

    repository = moduleFixture.get("ProfileRepository");
    service = moduleFixture.get<ScoreService>(ScoreService);
    resolver = moduleFixture.get<ScoreResolver>(ScoreResolver);
  });

  afterEach(async () => {
    await repository.query(`DELETE FROM score;`);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});

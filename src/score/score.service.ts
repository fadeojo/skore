import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AccountType, Profile } from "../profile/profile.entity";
import { CreateScoreInput } from "./dto/create-score.input";
import { UpdateScoreInput } from "./dto/update-score.input";
import { Score } from "./entities/score.entity";

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(Score)
    private readonly ScoreReoisitory: Repository<Score>,
    private readonly configService: ConfigService
  ) {}

  private isAdmin(profile) {
    if (profile.accountType === AccountType.ADMIN) {
      return;
    }
    throw new UnauthorizedException(
      `The profile with id: ${profile.id} is not allowed to perform this operation`
    );
  }

  create(profile: Profile, createScoreInput: CreateScoreInput): Promise<Score> {
    this.isAdmin(profile);
    const score = this.ScoreReoisitory.create(createScoreInput);
    return this.ScoreReoisitory.save(score);
  }

  findAll(): Promise<Score[]> {
    return this.ScoreReoisitory.find();
  }

  async findOne(id: number): Promise<Score> {
    const score = await this.ScoreReoisitory.findOne(id);
    if (score) {
      return score;
    }

    throw new NotFoundException(`The score with id: ${id} could not be found`);
  }

  async update(
    profile: Profile,
    id: number,
    updateScoreInput: UpdateScoreInput
  ): Promise<Score> {
    this.isAdmin(profile);
    const preloadedScore = await this.ScoreReoisitory.preload({
      id,
      ...updateScoreInput,
    });

    if (preloadedScore) {
      const updatedScore = await this.ScoreReoisitory.save(preloadedScore);
      return updatedScore;
    }
    throw new NotFoundException(`The score with id: ${id} could not be found`);
  }

  async remove(id: number) {
    const preloadedScore = await this.findOne(id);
    if (preloadedScore) {
      const deletedScore = await this.ScoreReoisitory.softRemove(
        preloadedScore
      );
      return deletedScore;
    }

    throw new NotFoundException(`The score with id: ${id} could not be found`);
  }
}

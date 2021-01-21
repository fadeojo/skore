import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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

  create(createScoreInput: CreateScoreInput): Promise<Score> {
    const score = this.ScoreReoisitory.create(createScoreInput);
    return this.ScoreReoisitory.save(score);
  }

  findAll() {
    return `This action returns all score`;
  }

  async findOne(id: number): Promise<Score> {
    const score = await this.ScoreReoisitory.findOne(id);
    return score;
  }

  update(id: number, updateScoreInput: UpdateScoreInput) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}

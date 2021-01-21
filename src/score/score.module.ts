import { Module } from "@nestjs/common";
import { ScoreService } from "./score.service";
import { ScoreResolver } from "./score.resolver";
import { Score } from "./entities/score.entity";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Score]), ConfigModule],
  providers: [ScoreResolver, ScoreService],
})
export class ScoreModule {}

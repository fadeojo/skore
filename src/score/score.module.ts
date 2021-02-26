import { Module } from "@nestjs/common";
import { ScoreService } from "./score.service";
import { ScoreResolver } from "./score.resolver";
import { Score } from "./entities/score.entity";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileModule } from "../profile/profile.module";

@Module({
  imports: [TypeOrmModule.forFeature([Score]), ConfigModule, ProfileModule],
  providers: [ScoreResolver, ScoreService],
})
export class ScoreModule {}

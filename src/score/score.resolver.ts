import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ScoreService } from "./score.service";
import { Score } from "./entities/score.entity";
import { CreateScoreInput } from "./dto/create-score.input";
import { UpdateScoreInput } from "./dto/update-score.input";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../../libs/auth/src";
import { User } from "../user/model/User";
import { CurrentUser } from "../user/currentUser.decorator";
import { ProfileService } from "../profile/profile.service";

@Resolver(() => Score)
export class ScoreResolver {
  constructor(
    private readonly scoreService: ScoreService,
    private readonly profileService: ProfileService
  ) {}

  @UseGuards(AuthGuard)
  @Mutation(() => Score)
  async createScore(
    @CurrentUser() user: User,
    @Args("createScoreInput") createScoreInput: CreateScoreInput
  ) {
    const profile = await this.profileService.getProfile(user.userId);
    return this.scoreService.create(profile, createScoreInput);
  }

  @Query(() => [Score], { name: "score" })
  findAll() {
    return this.scoreService.findAll();
  }

  // @Query(() => Score, { name: 'score' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.scoreService.findOne(id);
  // }

  // @Mutation(() => Score)
  // updateScore(@Args('updateScoreInput') updateScoreInput: UpdateScoreInput) {
  //   return this.scoreService.update(updateScoreInput.id, updateScoreInput);
  // }

  @Mutation(() => Score)
  removeScore(@Args("id", { type: () => Int }) id: number) {
    return this.scoreService.remove(id);
  }
}

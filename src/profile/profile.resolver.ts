import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthGuard } from '@skore/auth';
import { UseGuards, Logger, UseFilters } from '@nestjs/common';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
import { CurrentUser } from '../user/currentUser.decorator';
import { User } from '../user/model/User';
import { CreateProfileInput, UpdateProfileInput } from './dto/profile.dto';
import { ExceptionLoggerFilter } from '@skore/skore-exception/exception-logger.filter';

@UseFilters(new ExceptionLoggerFilter())
@Resolver('Profile')
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Query(() => Profile)
  async getProfile(@CurrentUser() user: User): Promise<Profile> {
    const profile = await this.profileService.getProfile(
      user.sub.split('|')[1],
    );
    return profile;
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Profile)
  async createProfile(
    @Args('profile') params: CreateProfileInput,
    @CurrentUser() user: User,
  ): Promise<Profile> {
    try {
      const createdProfile = await this.profileService.createProfile({
        ...params,
        userId: user.sub.split('|')[1],
      });
      if (createdProfile) {
        return createdProfile;
      }
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Profile)
  async updateProfile(
    @CurrentUser() user: User,
    @Args('profile') params: UpdateProfileInput,
  ): Promise<Profile> {
    const profile = this.profileService.updateProfile(
      params,
      user.sub.split('|')[1],
    );
    return profile;
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Profile)
  async deleteProfile(@CurrentUser() user: User): Promise<Profile> {
    const deleteResult = await this.profileService.deleteProfile(
      user.sub.split('|')[1],
    );
    return deleteResult;
  }
}

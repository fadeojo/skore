import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import {
  CreateProfileInputRepositoryDTO,
  UpdateProfileInput,
} from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileReoisitory: Repository<Profile>,
  ) {}

  async getProfile(id: string): Promise<Profile> {
    const profiles = await this.profileReoisitory.find({
      where: { userId: id },
      take: 1,
    });
    if (profiles.length > 0) {
      return profiles[0];
    }
    throw new NotFoundException(
      new Error(`profile not found for user with id:${id}`),
    );
  }

  async createProfile(
    profileParams: CreateProfileInputRepositoryDTO,
  ): Promise<Profile> {
    const profile = this.profileReoisitory.create(profileParams);
    return this.profileReoisitory.save(profile);
  }

  async updateProfile(
    profileParams: UpdateProfileInput,
    id: string,
  ): Promise<Profile> {
    const currentProfile = await this.getProfile(id);
    const preloadedProfile = await this.profileReoisitory.preload({
      id: currentProfile.id,
      ...profileParams,
    });
    const profile = await this.profileReoisitory.save(preloadedProfile);
    return profile;
  }

  async deleteProfile(id: string): Promise<Profile> {
    const preloadedProfile = await this.getProfile(`${id}`);
    const deletedProfile = await this.profileReoisitory.softRemove(
      preloadedProfile,
    );
    return deletedProfile;
  }
}

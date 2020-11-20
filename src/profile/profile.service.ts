import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import {
  CreateProfileInput,
  UpdateProfileInput,
} from './dto/profile.dto';
import Axios, { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileReoisitory: Repository<Profile>,
    private readonly configService: ConfigService,
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

  async CreateUserAccount(email: string, password: string): Promise<any> {
    const authConfiguration = this.configService.get('auth');
    const url = `${authConfiguration.issuer}dbconnections/signup`;
    let userAccountResponse: AxiosResponse<any>;
    try {
      userAccountResponse = await Axios.post(url, {
        client_id: authConfiguration.clientId,
        email: email,
        password: password,
        connection: authConfiguration.realm,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        new Error(JSON.stringify(error.response.data, null, 0)),
        'profileService.CreateuserAccout',
      );
    }
    return userAccountResponse;
  }

  async createProfile(
    profileParams: CreateProfileInput,
  ): Promise<Profile> {
    // create the auth0 user
    const user = await this.CreateUserAccount(profileParams.email, profileParams.password)

    // create a profile for the auth0 user
    const profile = this.profileReoisitory.create({...profileParams, userId: user['data']['_id'] });
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

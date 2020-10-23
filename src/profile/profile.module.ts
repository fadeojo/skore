import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { ProfileResolver } from './profile.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule {}

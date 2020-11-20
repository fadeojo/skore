import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { ProfileResolver } from './profile.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), ConfigModule],
  providers: [ProfileService, ProfileResolver, ConfigService],
})
export class ProfileModule {}

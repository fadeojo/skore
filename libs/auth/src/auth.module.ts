import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [AuthService, AuthResolver, ConfigService],
  exports: [AuthService],
})
export class AuthModule {}

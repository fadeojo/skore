import { Module } from '@nestjs/common';
import { skoreExceptionService } from './skore-exception.service';

@Module({
  providers: [skoreExceptionService],
  exports: [skoreExceptionService],
})
export class skoreExceptionModule {}

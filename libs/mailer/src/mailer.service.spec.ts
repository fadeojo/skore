import { Test, TestingModule } from '@nestjs/testing';
import { MailerService } from './mailer.service';
import { ConfigService } from '@nestjs/config';

describe('MailerService', () => {
  let service: MailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailerService, ConfigService],
    }).compile();

    service = module.get<MailerService>(MailerService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});

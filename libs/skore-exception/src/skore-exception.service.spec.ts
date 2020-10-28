import { Test, TestingModule } from '@nestjs/testing';
import { skoreExceptionService } from './skore-exception.service';

describe('skoreExceptionService', () => {
  let service: skoreExceptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [skoreExceptionService],
    }).compile();

    service = module.get<skoreExceptionService>(skoreExceptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

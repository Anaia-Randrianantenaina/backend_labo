import { Test, TestingModule } from '@nestjs/testing';
import { ExternesService } from './externes.service';

describe('ExternesService', () => {
  let service: ExternesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternesService],
    }).compile();

    service = module.get<ExternesService>(ExternesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

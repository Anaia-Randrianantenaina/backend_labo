import { Test, TestingModule } from '@nestjs/testing';
import { IntrantService } from './intrant.service';

describe('IntrantService', () => {
  let service: IntrantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntrantService],
    }).compile();

    service = module.get<IntrantService>(IntrantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

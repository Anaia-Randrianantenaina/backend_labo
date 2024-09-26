import { Test, TestingModule } from '@nestjs/testing';
import { AnalysesService } from './analyses.service';

describe('AnalysesService', () => {
  let service: AnalysesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysesService],
    }).compile();

    service = module.get<AnalysesService>(AnalysesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

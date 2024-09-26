import { Test, TestingModule } from '@nestjs/testing';
import { ViewanalysesService } from './viewanalyses.service';

describe('ViewanalysesService', () => {
  let service: ViewanalysesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewanalysesService],
    }).compile();

    service = module.get<ViewanalysesService>(ViewanalysesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

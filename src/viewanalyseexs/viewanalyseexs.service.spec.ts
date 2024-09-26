import { Test, TestingModule } from '@nestjs/testing';
import { ViewanalyseexsService } from './viewanalyseexs.service';

describe('ViewanalyseexsService', () => {
  let service: ViewanalyseexsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewanalyseexsService],
    }).compile();

    service = module.get<ViewanalyseexsService>(ViewanalyseexsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

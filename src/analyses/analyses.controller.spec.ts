import { Test, TestingModule } from '@nestjs/testing';
import { AnalysesController } from './analyses.controller';
import { AnalysesService } from './analyses.service';

describe('AnalysesController', () => {
  let controller: AnalysesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalysesController],
      providers: [AnalysesService],
    }).compile();

    controller = module.get<AnalysesController>(AnalysesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

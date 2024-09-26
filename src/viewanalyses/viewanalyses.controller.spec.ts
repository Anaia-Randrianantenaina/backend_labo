import { Test, TestingModule } from '@nestjs/testing';
import { ViewanalysesController } from './viewanalyses.controller';
import { ViewanalysesService } from './viewanalyses.service';

describe('ViewanalysesController', () => {
  let controller: ViewanalysesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewanalysesController],
      providers: [ViewanalysesService],
    }).compile();

    controller = module.get<ViewanalysesController>(ViewanalysesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

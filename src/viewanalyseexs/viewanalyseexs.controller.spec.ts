import { Test, TestingModule } from '@nestjs/testing';
import { ViewanalyseexsController } from './viewanalyseexs.controller';
import { ViewanalyseexsService } from './viewanalyseexs.service';

describe('ViewanalyseexsController', () => {
  let controller: ViewanalyseexsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewanalyseexsController],
      providers: [ViewanalyseexsService],
    }).compile();

    controller = module.get<ViewanalyseexsController>(ViewanalyseexsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

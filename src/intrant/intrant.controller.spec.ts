import { Test, TestingModule } from '@nestjs/testing';
import { IntrantController } from './intrant.controller';
import { IntrantService } from './intrant.service';

describe('IntrantController', () => {
  let controller: IntrantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntrantController],
      providers: [IntrantService],
    }).compile();

    controller = module.get<IntrantController>(IntrantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

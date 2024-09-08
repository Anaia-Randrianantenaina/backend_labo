import { Test, TestingModule } from '@nestjs/testing';
import { ExternesController } from './externes.controller';
import { ExternesService } from './externes.service';

describe('ExternesController', () => {
  let controller: ExternesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternesController],
      providers: [ExternesService],
    }).compile();

    controller = module.get<ExternesController>(ExternesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

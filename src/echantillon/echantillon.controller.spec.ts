import { Test, TestingModule } from '@nestjs/testing';
import { EchantillonController } from './echantillon.controller';
import { EchantillonService } from './echantillon.service';

describe('EchantillonController', () => {
  let controller: EchantillonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EchantillonController],
      providers: [EchantillonService],
    }).compile();

    controller = module.get<EchantillonController>(EchantillonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

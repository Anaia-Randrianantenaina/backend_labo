import { Test, TestingModule } from '@nestjs/testing';
import { MedecinlocalsController } from './medecinlocals.controller';
import { MedecinlocalsService } from './medecinlocals.service';

describe('MedecinlocalsController', () => {
  let controller: MedecinlocalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedecinlocalsController],
      providers: [MedecinlocalsService],
    }).compile();

    controller = module.get<MedecinlocalsController>(MedecinlocalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

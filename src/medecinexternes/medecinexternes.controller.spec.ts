import { Test, TestingModule } from '@nestjs/testing';
import { MedecinexternesController } from './medecinexternes.controller';
import { MedecinexternesService } from './medecinexternes.service';

describe('MedecinexternesController', () => {
  let controller: MedecinexternesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedecinexternesController],
      providers: [MedecinexternesService],
    }).compile();

    controller = module.get<MedecinexternesController>(MedecinexternesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

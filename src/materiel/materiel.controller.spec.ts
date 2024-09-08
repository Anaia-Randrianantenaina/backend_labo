import { Test, TestingModule } from '@nestjs/testing';
import { MaterielController } from './materiel.controller';
import { MaterielService } from './materiel.service';

describe('MaterielController', () => {
  let controller: MaterielController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterielController],
      providers: [MaterielService],
    }).compile();

    controller = module.get<MaterielController>(MaterielController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

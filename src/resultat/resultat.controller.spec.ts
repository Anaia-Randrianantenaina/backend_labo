import { Test, TestingModule } from '@nestjs/testing';
import { ResultatController } from './resultat.controller';
import { ResultatService } from './resultat.service';

describe('ResultatController', () => {
  let controller: ResultatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultatController],
      providers: [ResultatService],
    }).compile();

    controller = module.get<ResultatController>(ResultatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

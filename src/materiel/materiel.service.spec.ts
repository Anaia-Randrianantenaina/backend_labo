import { Test, TestingModule } from '@nestjs/testing';
import { MaterielService } from './materiel.service';

describe('MaterielService', () => {
  let service: MaterielService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterielService],
    }).compile();

    service = module.get<MaterielService>(MaterielService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

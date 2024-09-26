import { Test, TestingModule } from '@nestjs/testing';
import { ResultatService } from './resultat.service';

describe('ResultatService', () => {
  let service: ResultatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultatService],
    }).compile();

    service = module.get<ResultatService>(ResultatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

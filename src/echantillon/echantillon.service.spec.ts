import { Test, TestingModule } from '@nestjs/testing';
import { EchantillonService } from './echantillon.service';

describe('EchantillonService', () => {
  let service: EchantillonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EchantillonService],
    }).compile();

    service = module.get<EchantillonService>(EchantillonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

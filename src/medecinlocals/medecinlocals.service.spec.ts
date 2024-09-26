import { Test, TestingModule } from '@nestjs/testing';
import { MedecinlocalsService } from './medecinlocals.service';

describe('MedecinlocalsService', () => {
  let service: MedecinlocalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedecinlocalsService],
    }).compile();

    service = module.get<MedecinlocalsService>(MedecinlocalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

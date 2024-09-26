import { Test, TestingModule } from '@nestjs/testing';
import { MedecinexternesService } from './medecinexternes.service';

describe('MedecinexternesService', () => {
  let service: MedecinexternesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedecinexternesService],
    }).compile();

    service = module.get<MedecinexternesService>(MedecinexternesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

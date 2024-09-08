import { Test, TestingModule } from '@nestjs/testing';
import { HospitalisesService } from './hospitalises.service';

describe('HospitalisesService', () => {
  let service: HospitalisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalisesService],
    }).compile();

    service = module.get<HospitalisesService>(HospitalisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

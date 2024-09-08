import { Test, TestingModule } from '@nestjs/testing';
import { HospitalisesController } from './hospitalises.controller';
import { HospitalisesService } from './hospitalises.service';

describe('HospitalisesController', () => {
  let controller: HospitalisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalisesController],
      providers: [HospitalisesService],
    }).compile();

    controller = module.get<HospitalisesController>(HospitalisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { HospitalisesService } from './hospitalises.service';
import { HospitalisesController } from './hospitalises.controller';
import { Hospitalise } from './entities/hospitalise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitalise])],
  controllers: [HospitalisesController],
  providers: [HospitalisesService],
  exports: [HospitalisesService],
})
export class HospitalisesModule {}

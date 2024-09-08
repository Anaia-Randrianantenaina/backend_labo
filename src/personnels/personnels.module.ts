// src/personnels/personnels.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { PersonnelsService } from './personnels.service';
import { PersonnelsController } from './personnels.controller';



@Module({
  imports: [
    TypeOrmModule.forFeature([Personnel]),
  ],
  controllers: [PersonnelsController],
  providers: [PersonnelsService],
})
export class PersonnelsModule {}

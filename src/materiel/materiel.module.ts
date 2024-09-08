import { Module } from '@nestjs/common';
import { MaterielService } from './materiel.service';
import { MaterielController } from './materiel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materiel } from './entities/materiel.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Materiel])],
  controllers: [MaterielController],
  providers: [MaterielService],
  exports:[MaterielService]
})
export class MaterielModule {}

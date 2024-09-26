import { Module } from '@nestjs/common';
import { ResultatService } from './resultat.service';
import { ResultatController } from './resultat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultat } from './entities/resultat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resultat])],
  exports: [ResultatService],

  controllers: [ResultatController],
  providers: [ResultatService],
})
export class ResultatModule {}

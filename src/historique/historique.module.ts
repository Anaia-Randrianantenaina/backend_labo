import { Module } from '@nestjs/common';
import { HistoriqueService } from './historique.service';
import { HistoriqueController } from './historique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historique } from './entities/historique.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Historique])],
  controllers: [HistoriqueController],
  providers: [HistoriqueService],
  exports : [HistoriqueService]
})
export class HistoriqueModule {}

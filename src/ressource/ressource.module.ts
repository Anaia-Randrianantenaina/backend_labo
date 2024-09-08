import { Module } from '@nestjs/common';
import { RessourceService } from './ressource.service';
import { RessourceController } from './ressource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ressource } from './entities/ressource.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Ressource])],
  controllers: [RessourceController],
  providers: [RessourceService],
  exports : [RessourceService]
})
export class RessourceModule {}

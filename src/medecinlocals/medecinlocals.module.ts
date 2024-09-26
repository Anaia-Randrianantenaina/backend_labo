import { Module } from '@nestjs/common';
import { MedecinlocalsService } from './medecinlocals.service';
import { MedecinlocalsController } from './medecinlocals.controller';
import { Medecinlocal } from './entities/medecinlocal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Medecinlocal])],
  controllers: [MedecinlocalsController],
  providers: [MedecinlocalsService],
  exports: [MedecinlocalsService],
})
export class MedecinlocalsModule {}

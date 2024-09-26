import { Module } from '@nestjs/common';
import { MedecinexternesService } from './medecinexternes.service';
import { MedecinexternesController } from './medecinexternes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecinexterne } from './entities/medecinexterne.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medecinexterne])],
  controllers: [MedecinexternesController],
  providers: [MedecinexternesService],
  exports: [MedecinexternesService],
})
export class MedecinexternesModule {}

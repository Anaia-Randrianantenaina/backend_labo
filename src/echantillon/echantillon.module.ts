import { Module } from '@nestjs/common';
import { EchantillonService } from './echantillon.service';
import { EchantillonController } from './echantillon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Echantillon } from './entities/echantillon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Echantillon])],
  exports: [EchantillonService],
  
  controllers: [EchantillonController],
  providers: [EchantillonService],
})
export class EchantillonModule {}

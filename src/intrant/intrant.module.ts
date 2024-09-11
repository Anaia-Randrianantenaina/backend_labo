import { Module } from '@nestjs/common';
import { IntrantService } from './intrant.service';
import { IntrantController } from './intrant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intrant } from './entities/intrant.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Intrant])],
  controllers: [IntrantController],
  providers: [IntrantService],
})
export class IntrantModule {}

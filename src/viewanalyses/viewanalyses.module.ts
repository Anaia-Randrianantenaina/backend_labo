import { Module } from '@nestjs/common';
import { ViewanalysesService } from './viewanalyses.service';
import { ViewanalysesController } from './viewanalyses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viewanalysis } from './entities/viewanalysis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viewanalysis])],
  controllers: [ViewanalysesController],
  providers: [ViewanalysesService],
})
export class ViewanalysesModule {}


import { Module } from '@nestjs/common';
import { ViewanalyseexsService } from './viewanalyseexs.service';
import { ViewanalyseexsController } from './viewanalyseexs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viewanalyseex } from './entities/viewanalyseex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viewanalyseex])],
  controllers: [ViewanalyseexsController],
  providers: [ViewanalyseexsService],
})
export class ViewanalyseexsModule {}

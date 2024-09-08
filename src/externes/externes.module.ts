import { Module } from '@nestjs/common';
import { ExternesService } from './externes.service';
import { ExternesController } from './externes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Externe } from './entities/externe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Externe])],
  controllers: [ExternesController],
  providers: [ExternesService],
  exports: [ExternesService],
})
export class ExternesModule {}

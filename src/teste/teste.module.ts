import { Module } from '@nestjs/common';
import { TesteService } from './teste.service';
import { TesteController } from './teste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teste } from './entities/teste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teste])],
  exports: [TesteService],

  controllers: [TesteController],
  providers: [TesteService],
})
export class TesteModule {}

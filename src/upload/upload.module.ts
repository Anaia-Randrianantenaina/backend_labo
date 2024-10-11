import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UploadedFileEntity } from './uploaded-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UploadedFileEntity])], // Assurez-vous que l'entité est importée
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}

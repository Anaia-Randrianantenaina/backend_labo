import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { File } from 'src/file/entities/file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([File]), // Assurez-vous que cette ligne est présente pour enregistrer l'entité
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadedFileEntity } from './uploaded-file.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(UploadedFileEntity)
    private readonly uploadedFileRepository: Repository<UploadedFileEntity>,
  ) {}

  // Enregistre le chemin du fichier et son contenu
  async saveFilePath(filePath: string, contenu: string): Promise<UploadedFileEntity> {
    console.log(`Saving file path: ${filePath} with content: ${contenu}`);
    
    const uploadedFile = this.uploadedFileRepository.create({ filePath, contenu });
    return this.uploadedFileRepository.save(uploadedFile);
  }

  // Récupère tous les fichiers uploadés
  async findAll(): Promise<UploadedFileEntity[]> {
    return this.uploadedFileRepository.find();
  }
}

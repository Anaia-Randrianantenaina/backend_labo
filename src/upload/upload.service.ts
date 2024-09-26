import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Injectable()
export class UploadService {
  // Fonction pour sauvegarder un fichier et retourner son chemin
  saveFile(file: Express.Multer.File): string {
    const uploadDir = './uploads';

    // Crée le dossier s'il n'existe pas déjà
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const fileExtName = extname(file.originalname);
    const fileName = `${Date.now()}-rapport${fileExtName}`;

    const filePath = `${uploadDir}/${fileName}`;
    // Retourne le chemin où le fichier a été enregistré
    return filePath;
  }
}

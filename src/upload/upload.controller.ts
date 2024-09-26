import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'; // Import diskStorage depuis multer
import { extname } from 'path'; // Import extname depuis path
import { UploadService } from './upload.service';

@Controller('upload-pdf')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Dossier où le fichier sera sauvegardé
      filename: (req, file, callback) => {
        const fileExtName = extname(file.originalname); // Crée l'extension du fichier
        const fileName = `${Date.now()}-rapport${fileExtName}`; // Créer un nom unique pour le fichier
        callback(null, fileName);
      },
    }),
  }))
  uploadPDF(@UploadedFile() file: Express.Multer.File) {
    const filePath = this.uploadService.saveFile(file);
    
    return {
      message: 'PDF uploadé avec succès',
      filePath: `/uploads/${file.filename}`, // Chemin relatif du fichier
    };
  }
}

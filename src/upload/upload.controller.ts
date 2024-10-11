import { Controller, Post, UploadedFile, Body, UseInterceptors, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from './upload.service';
import { UploadedFileEntity } from './uploaded-file.entity'; // Assurez-vous d'importer l'entité si nécessaire

@Controller('upload-pdf')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const fileExtName = extname(file.originalname);
        const fileName = `${Date.now()}-rapport${fileExtName}`;
        callback(null, fileName);
      },
    }),
  }))
  async uploadPDF(
    @UploadedFile() file: Express.Multer.File,
    @Body('contenu') contenu: string,
  ) {
    const filePath = `/uploads/${file.filename}`;
    console.log(`Contenu reçu: ${contenu}`);

    const savedFile = await this.uploadService.saveFilePath(filePath, contenu);

    return {
      message: 'PDF et contenu uploadés avec succès',
      file: savedFile,
    };
  }

  // Endpoint pour récupérer tous les fichiers PDF
  @Get('pdfs')
  async getUploadedFiles(): Promise<UploadedFileEntity[]> {
    return this.uploadService.findAll();
  }
  
}

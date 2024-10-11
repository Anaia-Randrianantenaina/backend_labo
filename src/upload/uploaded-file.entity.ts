import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('uploaded_files') // Assurez-vous que le nom de la table est correct
export class UploadedFileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filePath: string; // Le champ pour stocker le chemin du fichier

  @Column({ type: 'text', nullable: true })
  contenu: string;

}

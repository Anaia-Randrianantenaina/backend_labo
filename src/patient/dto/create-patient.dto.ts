import { IsNotEmpty, IsString } from 'class-validator';
import { CreateEchantillonDto } from 'src/echantillon/dto/create-echantillon.dto';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  numero: string;

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsString()
  age: string;

  @IsString()
  rc: string;

  @IsString()
  adresse: string;

  @IsString()
  sexe: string;

  @IsString()
  prescripteur: string;

  @IsString()
  service: string;

  echantillons: CreateEchantillonDto[];
}

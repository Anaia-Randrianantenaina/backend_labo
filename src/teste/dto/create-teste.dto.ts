import { IsNotEmpty, IsString } from 'class-validator';
import { CreateResultatDto } from 'src/resultat/dto/create-resultat.dto';

export class CreateTesteDto {
  @IsString()
  unite: string;

  @IsString()
  sous_unite: string;

  @IsNotEmpty()
  @IsString()
  parametre: string;

  @IsNotEmpty()
  echantillonId: number;


  testes: CreateResultatDto[];
}

import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { CreateTesteDto } from 'src/teste/dto/create-teste.dto';

export class CreateEchantillonDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsDateString()
  date_prelevement: string;

  @IsNotEmpty()
  patientId: number;

  testes: CreateTesteDto[];
}

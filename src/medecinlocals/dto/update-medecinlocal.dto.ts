import { PartialType } from '@nestjs/mapped-types';
import { CreateMedecinlocalDto } from './create-medecinlocal.dto';

export class UpdateMedecinlocalDto extends PartialType(CreateMedecinlocalDto) {}

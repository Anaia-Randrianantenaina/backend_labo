import { PartialType } from '@nestjs/mapped-types';
import { CreateEchantillonDto } from './create-echantillon.dto';

export class UpdateEchantillonDto extends PartialType(CreateEchantillonDto) {}

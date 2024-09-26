import { PartialType } from '@nestjs/mapped-types';
import { CreateResultatDto } from './create-resultat.dto';

export class UpdateResultatDto extends PartialType(CreateResultatDto) {}

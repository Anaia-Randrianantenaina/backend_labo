import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriqueDto } from './create-historique.dto';

export class UpdateHistoriqueDto extends PartialType(CreateHistoriqueDto) {}

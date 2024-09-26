import { PartialType } from '@nestjs/mapped-types';
import { CreateTesteDto } from './create-teste.dto';

export class UpdateTesteDto extends PartialType(CreateTesteDto) {}

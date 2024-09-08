import { PartialType } from '@nestjs/mapped-types';
import { CreateExterneDto } from './create-externe.dto';

export class UpdateExterneDto extends PartialType(CreateExterneDto) {}

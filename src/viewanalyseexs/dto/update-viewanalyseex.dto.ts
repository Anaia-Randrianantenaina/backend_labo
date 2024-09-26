import { PartialType } from '@nestjs/mapped-types';
import { CreateViewanalyseexDto } from './create-viewanalyseex.dto';

export class UpdateViewanalyseexDto extends PartialType(CreateViewanalyseexDto) {}

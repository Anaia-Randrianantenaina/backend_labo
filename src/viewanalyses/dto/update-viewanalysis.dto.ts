import { PartialType } from '@nestjs/mapped-types';
import { CreateViewanalysisDto } from './create-viewanalysis.dto';

export class UpdateViewanalysisDto extends PartialType(CreateViewanalysisDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateIntrantDto } from './create-intrant.dto';

export class UpdateIntrantDto extends PartialType(CreateIntrantDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitaliseDto } from './create-hospitalise.dto';

export class UpdateHospitaliseDto extends PartialType(CreateHospitaliseDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMedecinexterneDto } from './create-medecinexterne.dto';

export class UpdateMedecinexterneDto extends PartialType(CreateMedecinexterneDto) {}

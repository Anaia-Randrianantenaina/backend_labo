import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('creer')
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get('listes')
  findAll() {
    return this.patientService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Put('misajours/:id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }


  @Get('search')
  async findByNom(@Query('nom') nom: string): Promise<{ nom: string }[]> {
    return this.patientService.findByNom(nom);
  }


  @Get('aff')
  async affichage(): Promise<Patient[]> {
    return this.patientService.affichage();
  }
}

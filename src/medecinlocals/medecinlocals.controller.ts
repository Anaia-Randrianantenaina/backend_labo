import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedecinlocalsService } from './medecinlocals.service';
import { CreateMedecinlocalDto } from './dto/create-medecinlocal.dto';
import { UpdateMedecinlocalDto } from './dto/update-medecinlocal.dto';

@Controller('medecinlocals')
export class MedecinlocalsController {
  constructor(private readonly medecinlocalsService: MedecinlocalsService) {}

  @Post()
  create(@Body() createMedecinlocalDto: CreateMedecinlocalDto) {
    return this.medecinlocalsService.create(createMedecinlocalDto);
  }

  @Get()
  findAll() {
    return this.medecinlocalsService.findAll();
  }

  @Get(':matricule')
  findOne(@Param('matricule') matricule: string) {
    return this.medecinlocalsService.findOne(matricule);
  }

  @Patch(':matricule')
  update(@Param('matricule') matricule: string, @Body() updateMedecinlocalDto: UpdateMedecinlocalDto) {
    return this.medecinlocalsService.update(matricule, updateMedecinlocalDto);
  }

  @Delete(':matricule')
  remove(@Param('matricule') matricule: string) {
    return this.medecinlocalsService.remove(matricule);
  }

  @Get('max/numE')
  findMaxNum() {
    return this.medecinlocalsService.findMaxNumE();
  }

  @Get('matricules')
  async getMatricules(): Promise<string[]> {
    return this.medecinlocalsService.testa();
  }

  @Get('matri/:id')
  async finde(@Param('matricule') matricule: string) {
    return await this.medecinlocalsService.findSer(matricule);
  }
}

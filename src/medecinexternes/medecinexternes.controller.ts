import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedecinexternesService } from './medecinexternes.service';
import { CreateMedecinexterneDto } from './dto/create-medecinexterne.dto';
import { UpdateMedecinexterneDto } from './dto/update-medecinexterne.dto';

@Controller('medecinexternes')
export class MedecinexternesController {
  constructor(private readonly medecinexternesService: MedecinexternesService) {}

  @Post()
  create(@Body() createMedecinexterneDto: CreateMedecinexterneDto) {
    return this.medecinexternesService.create(createMedecinexterneDto);
  }

  @Get()
  findAll() {
    return this.medecinexternesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medecinexternesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedecinexterneDto: UpdateMedecinexterneDto) {
    return this.medecinexternesService.update(id, updateMedecinexterneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medecinexternesService.remove(id);
  }

  @Get(':nomME')
  async getMedecinExterneByNom(@Param('nomME') nomME: string) {
    return await this.medecinexternesService.NomME(nomME);
  }
}

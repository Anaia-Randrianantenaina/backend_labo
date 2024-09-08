import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { MaterielService } from './materiel.service';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';

@Controller('materiel')
export class MaterielController {
  constructor(private readonly materielService: MaterielService) {}

  // @Post('ajout')
  // create(@Body() createMaterielDto: CreateMaterielDto) {
  //   return this.materielService.create(createMaterielDto);
  // }

  @Post('ajout')
  async create(@Body() createMaterielDto: CreateMaterielDto) {
    try {
      const result = await this.materielService.create(createMaterielDto);
      return result;
    } catch (error) {
      // Log l'erreur et renvoie une réponse d'erreur appropriée
      console.error('Erreur lors de la création du matériel:', error.message);
      throw new HttpException('Erreur interne du serveur', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('liste')
  findAll() {
    return this.materielService.findAll();
  }

  @Get('count')
  async countMateriel(): Promise<number> {
    return this.materielService.countMateriel();
  }

  @Get('count-bonne')
  async counteBonne(): Promise<number> {
    return this.materielService.counteBonne();
  }

  @Get('count-mauvais')
  async counteMauvais(): Promise<number> {
    return this.materielService.counteMauvais();
  }

  @Get('count-moyen')
  async counteMoyen(): Promise<number> {
    return this.materielService.counteMoyen();
  }

  @Get('select/:id')
  findOne(@Param('id') id: number) {
    return this.materielService.findOne(+id);
  }

  @Patch('modification/:id')
  update(@Param('id') id: number, @Body() updateMaterielDto: UpdateMaterielDto) {
    return this.materielService.update(+id, updateMaterielDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: number) {
    return this.materielService.remove(+id);

  }

  @Get('max')
  async getMax(): Promise<number> {
    return this.materielService.getMax();
  }

  @Get('names')
  async getAllNames(): Promise<number[]> {
    return this.materielService.getAllNames();
  }
}

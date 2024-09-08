import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RessourceService } from './ressource.service';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { UpdateRessourceDto } from './dto/update-ressource.dto';

@Controller('ressource')
export class RessourceController {
  constructor(private readonly ressourceService: RessourceService) {}

  @Post('ajout')
  async create(@Body() createRessourceDto: CreateRessourceDto) {
try {
  const result = await this.ressourceService.create(createRessourceDto);
  return result;
} catch (error) {
  // Erreur
  console.error('Erreur lors de la création du ressource',error.message)
  throw new HttpException('Errerur interne du serveur', HttpStatus.INTERNAL_SERVER_ERROR);
  
}  }

  @Get('liste')
  findAll() {
    return this.ressourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ressourceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRessourceDto: UpdateRessourceDto) {
    return this.ressourceService.update(id, updateRessourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ressourceService.remove(id);
  }
}

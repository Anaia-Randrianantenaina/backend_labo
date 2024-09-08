import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { HistoriqueService } from './historique.service';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import { Historique } from './entities/historique.entity';

@Controller('historique')
export class HistoriqueController {
  constructor(private readonly historiqueService: HistoriqueService) {}

  @Post('ajout')
  create(@Body() createHistoriqueDto:CreateHistoriqueDto){
    return this.historiqueService.create(createHistoriqueDto);
  }

  @Get('liste')
  findAll() {
    return this.historiqueService.findAll();
  }

  @Get('max')
  async getMaxPrice(): Promise<number> {
    return this.historiqueService.getMaxPrice();
  }

  @Get('max-id')
  async getMaxIdHistorique(): Promise<Historique> {
    return this.historiqueService.getMaxIdHistorique();
  }

  @Get('select/:id')
  findOne(@Param('id') id: string) {
    return this.historiqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriqueDto: UpdateHistoriqueDto) {
    return this.historiqueService.update(+id, updateHistoriqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiqueService.remove(+id);
  }
}

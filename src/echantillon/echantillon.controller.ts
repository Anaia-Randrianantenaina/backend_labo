import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EchantillonService } from './echantillon.service';
import { CreateEchantillonDto } from './dto/create-echantillon.dto';
import { UpdateEchantillonDto } from './dto/update-echantillon.dto';

@Controller('echantillon')
export class EchantillonController {
  constructor(private readonly echantillonService: EchantillonService) {}

  @Post('creer')
  create(@Body() createEchantillonDto: CreateEchantillonDto) {
    return this.echantillonService.create(createEchantillonDto);
  }

  @Get('listes')
  findAll() {
    return this.echantillonService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: string) {
    return this.echantillonService.findOne(+id);
  }

  @Put('misajours/:id')
  update(@Param('id') id: string, @Body() updateEchantillonDto: UpdateEchantillonDto) {
    return this.echantillonService.update(+id, updateEchantillonDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: string) {
    return this.echantillonService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ResultatService } from './resultat.service';
import { CreateResultatDto } from './dto/create-resultat.dto';
import { UpdateResultatDto } from './dto/update-resultat.dto';

@Controller('resultat')
export class ResultatController {
  constructor(private readonly resultatService: ResultatService) {}

  @Post('creer')
  create(@Body() createResultatDto: CreateResultatDto) {
    return this.resultatService.create(createResultatDto);
  }

  @Get('listes')
  findAll() {
    return this.resultatService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: string) {
    return this.resultatService.findOne(+id);
  }

  // @Put('misajours/:id')
  // update(@Param('id') id: string, @Body() updateResultatDto: UpdateResultatDto) {
  //   return this.resultatService.update(+id, updateResultatDto);
  // }

  @Put('misajours/:id')
  async update(
    @Param('id') id: number,
    @Body() updateResultatDto: UpdateResultatDto,
  ) {
    return this.resultatService.update(id, updateResultatDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: string) {
    return this.resultatService.remove(+id);
  }
}

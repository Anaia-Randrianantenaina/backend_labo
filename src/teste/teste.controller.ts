import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
// localhost:3001/teste/4
@Controller('teste')
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Post('ajout')
  create(@Body() createTesteDto: CreateTesteDto) {
    return this.testeService.create(createTesteDto);
  }

  @Get('liste')
  findAll() {
    return this.testeService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: number) {
    return this.testeService.findOne(+id);
  }

  @Patch('modification/:id')
  update(@Param('id') id: number, @Body() updateTesteDto: UpdateTesteDto) {
    return this.testeService.update(+id, updateTesteDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: number) {
    return this.testeService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';

@Controller('teste')
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Post('creer')
  create(@Body() createTesteDto: CreateTesteDto) {
    return this.testeService.create(createTesteDto);
  }

  @Get('listes')
  findAll() {
    return this.testeService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: string) {
    return this.testeService.findOne(+id);
  }

  // @Put('misajous/:id')
  // update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
  //   return this.testeService.update(+id, updateTesteDto);
  // }

  @Put('misajours/:id')
  async update(
    @Param('id') id: number,
    @Body() updateTesteDto: UpdateTesteDto,
  ) {
    return this.testeService.update(id, updateTesteDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: string) {
    return this.testeService.remove(+id);
  }
}

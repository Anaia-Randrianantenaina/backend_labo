import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntrantService } from './intrant.service';
import { CreateIntrantDto } from './dto/create-intrant.dto';
import { UpdateIntrantDto } from './dto/update-intrant.dto';

@Controller('intrant')
export class IntrantController {
  constructor(private readonly intrantService: IntrantService) {}

  @Post('ajout')
  create(@Body() createIntrantDto: CreateIntrantDto) {
    return this.intrantService.create(createIntrantDto);
  }

  @Get('liste')
  findAll() {
    return this.intrantService.findAll();
  }

  @Get('select/:id')
  findOne(@Param('id') id: number) {
    return this.intrantService.findOne(+id);
  }

  @Patch('modification/:id')
  update(@Param('id') id: number, @Body() updateIntrantDto: UpdateIntrantDto) {
    return this.intrantService.update(+id, updateIntrantDto);
  }

  @Delete('supprimer/:id')
  remove(@Param('id') id: number) {
    return this.intrantService.remove(+id);
  }
}

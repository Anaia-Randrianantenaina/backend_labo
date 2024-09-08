import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternesService } from './externes.service';
import { CreateExterneDto } from './dto/create-externe.dto';
import { UpdateExterneDto } from './dto/update-externe.dto';

@Controller('externes')
export class ExternesController {
  constructor(private readonly externesService: ExternesService) {}

  @Post()
  create(@Body() createExterneDto: CreateExterneDto) {
    return this.externesService.create(createExterneDto);
  }

  @Get()
  findAll() {
    return this.externesService.findAll();
  }

  @Get(':numE')
  findOne(@Param('numE') numE: number) {
    return this.externesService.findOne(+numE);
  }

  @Patch(':numE')
  update(@Param('numE') numE: number, @Body() updateExterneDto: UpdateExterneDto) {
    return this.externesService.update(+numE, updateExterneDto);
  }

  @Delete(':numE')
  remove(@Param('numE') numE: number) {
    return this.externesService.remove(+numE);
  }

  @Get('max/numE')
  findMaxNum() {
    return this.externesService.findMaxNumE();
  }
}

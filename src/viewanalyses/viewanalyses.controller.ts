import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViewanalysesService } from './viewanalyses.service';

@Controller('viewanalyses')
export class ViewanalysesController {
  constructor(private readonly viewanalysesService: ViewanalysesService) {}

  @Get()
  findAll() {
    return this.viewanalysesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.viewanalysesService.findOne(+id);
  }
}


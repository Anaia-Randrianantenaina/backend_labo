import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViewanalyseexsService } from './viewanalyseexs.service';

@Controller('viewanalyseexs')
export class ViewanalyseexsController {
  constructor(private readonly viewanalyseexsService: ViewanalyseexsService) {}

  @Get()
  findAll() {
    return this.viewanalyseexsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.viewanalyseexsService.findOne(+id);
  }
}

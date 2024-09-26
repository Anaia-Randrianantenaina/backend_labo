import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalysesService } from './analyses.service';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';

@Controller('analyses')
export class AnalysesController {
  constructor(private readonly analysesService: AnalysesService) {}

  @Post()
  create(@Body() createAnalysisDto: CreateAnalysisDto) {
    return this.analysesService.create(createAnalysisDto);
  }

  @Get()
  findAll() {
    return this.analysesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analysesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalysisDto: UpdateAnalysisDto) {
    
    return this.analysesService.update(+id, updateAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analysesService.remove(+id);
  }

  @Get('exam/:id')
  async findexam(@Param('id') id: number) {
    return await this.analysesService.findexam(id);
  }

  @Get('id/:id')
  async finde(@Param('id') id: number) {
    return await this.analysesService.findid(id);
  }

  @Get('find/:num')
  async findbyNum(@Param('num_hospi') num_hospi: number){
    return await this.analysesService.findbyNum(num_hospi)
  }
}

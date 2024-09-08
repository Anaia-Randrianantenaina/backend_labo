import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PersonnelsService } from './personnels.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Controller('personnels')
export class PersonnelsController {
  constructor(private readonly personnelsService: PersonnelsService) {}

  @Post()
  create(@Body() createPersonnelDto: CreatePersonnelDto) {
    return this.personnelsService.create(createPersonnelDto);
  }

  @Get()
  findAll() {
    return this.personnelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('Received ID:', id);  // Debugging line
    return this.personnelsService.findOne(id);
  }

  @Get('stats')
  async getPersonnelStats() {
    return this.personnelsService.getPersonnelStats();
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePersonnelDto: UpdatePersonnelDto) {
    return this.personnelsService.update(id, updatePersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.personnelsService.remove(id);
  }
}

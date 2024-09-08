import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalisesService } from './hospitalises.service';
import { CreateHospitaliseDto } from './dto/create-hospitalise.dto';
import { UpdateHospitaliseDto } from './dto/update-hospitalise.dto';
import { Hospitalise } from './entities/hospitalise.entity';

@Controller('hospitalises')
export class HospitalisesController {
  constructor(private readonly hospitalisesService: HospitalisesService) {}

  @Post()
  create(@Body() createHospitaliseDto: CreateHospitaliseDto): Promise<Hospitalise> {
    return this.hospitalisesService.create(createHospitaliseDto);
  }

  @Get()
  findAll(): Promise<Hospitalise[]> {
    return this.hospitalisesService.findAll();
  }

  @Get(':num')
  findOne(@Param('num') num: number): Promise<Hospitalise> {
    return this.hospitalisesService.findOne(num);
  }

  @Patch(':num')
  update(@Param('num') num: number, @Body() updateHospitaliseDto: UpdateHospitaliseDto): Promise<Hospitalise> {
    return this.hospitalisesService.update(num, updateHospitaliseDto);
  }

  @Delete(':num')
  remove(@Param('num') num: number): Promise<Hospitalise> {
    return this.hospitalisesService.remove(num);
  }

  @Get('max/num')
  findMaxNum(): Promise<number> {
    return this.hospitalisesService.findMaxNum();
  }

  @Get('tousNums')
  findNum(): Promise<number[]> {
    return this.hospitalisesService.tousNum();
  }
}

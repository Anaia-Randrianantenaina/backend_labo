import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateIntrantDto } from './dto/create-intrant.dto';
import { UpdateIntrantDto } from './dto/update-intrant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Intrant } from './entities/intrant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IntrantService {
  constructor(
    @InjectRepository(Intrant)
    private readonly intrantRepository : Repository<Intrant>){

    }
  async create(createIntrantDto: CreateIntrantDto) {
   const intrant = this.intrantRepository.create(createIntrantDto);
   return await this.intrantRepository.save(intrant);
  }

  async findAll() {
    return await this.intrantRepository.find();
  }

  async findOne(id: number) {
    return await this.intrantRepository.findOne({
      where : {id}
    });
  }

  async update(id: number, updateIntrantDto: UpdateIntrantDto) {
    const intrant = await this.findOne(id);

    if (!intrant) {
      throw new NotFoundException();
    }

    Object.assign(intrant, updateIntrantDto);

    return await this.intrantRepository.save(intrant);
  }

  async remove(id: number) {
    const intrant = await this.findOne(id);
    if (!intrant) {
      throw new NotFoundException();
    }
    return await this.intrantRepository.remove(intrant);
  }
}

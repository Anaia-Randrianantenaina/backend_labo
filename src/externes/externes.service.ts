import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExterneDto } from './dto/create-externe.dto';
import { UpdateExterneDto } from './dto/update-externe.dto';
import { Externe } from './entities/externe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExternesService {
  constructor(
    @InjectRepository(Externe)
    private readonly externeRepository:
    Repository<Externe>){
  }

  async create(createExterneDto: CreateExterneDto) {
    const externe = this.externeRepository.create
    (createExterneDto);
    return await this.externeRepository.save(externe);
  }

  async findAll() {
    return await this.externeRepository.find();
  }

  async findOne(numE: number) {
    return await this.externeRepository.findOne({
      where : { numE }
    });
  }

  async update(numE: number, updateExterneDto: UpdateExterneDto) {
    const externe = await this.findOne(numE)
    if(!externe){
      throw new NotFoundException()
    }
    Object.assign(externe, updateExterneDto);
    return await this.externeRepository.save(externe);
  }

  async remove(numE: number) {
    const externe = await this.findOne(numE)
    if(!externe){
      throw new NotFoundException()
    }
    return this.externeRepository.remove(externe);
  }

  async findMaxNumE(): Promise<number> {
    const maxNum = await this.externeRepository
      .createQueryBuilder('externe')
      .select('MAX(externe.numE)', 'max')
      .getRawOne();
    
    return maxNum ? maxNum.max : 0;
  }
}

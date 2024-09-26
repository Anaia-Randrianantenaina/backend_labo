import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Viewanalysis } from './entities/viewanalysis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViewanalysesService {
  constructor(
    @InjectRepository(Viewanalysis)
    private readonly vueanalysesRepository: Repository<Viewanalysis>,
  ){}

  async findAll() {
    return await this.vueanalysesRepository.find({
      order:{ num: 'ASC' }
    });
  }

  async findOne(id: number) {
    return await this.vueanalysesRepository.findOne({
      where: { id }
    });
  }
}

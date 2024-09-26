import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Viewanalyseex } from './entities/viewanalyseex.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViewanalyseexsService {
  constructor(
    @InjectRepository(Viewanalyseex)
    private readonly vueanalysesRepository: Repository<Viewanalyseex>,
  ){}

  async findAll() {
    return await this.vueanalysesRepository.find({
      order:{ numE: 'ASC' }
    });
  }

  async findOne(id: number) {
    return await this.vueanalysesRepository.findOne({
      where: { id }
    });
  }
}

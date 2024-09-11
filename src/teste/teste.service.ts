import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Repository } from 'typeorm';
import { Teste } from './entities/teste.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TesteService {
constructor(
  @InjectRepository(Teste)
  private readonly testeRepository : Repository<Teste>){
  
}

  async create(createTesteDto: CreateTesteDto) {
    const teste = this.testeRepository.create(createTesteDto);
    return await this.testeRepository.save(teste);
  }

  async findAll() {
    return await this.testeRepository.find();
  }

  async findOne(id: number) {
    return await this.testeRepository.findOne({
      where : {id}
    });
  }

  async update(id: number, updateTesteDto: UpdateTesteDto) {
    const teste = await this.findOne(id);

    if (!teste) {
      throw new NotFoundException();
    }

    Object.assign(teste, updateTesteDto);

    return await this.testeRepository.save(teste);
  }

  async remove(id: number) {
    const teste = await this.findOne(id);
    if (!teste) {
      throw new NotFoundException();
    }

    return await this.testeRepository.remove(teste);
  }
}

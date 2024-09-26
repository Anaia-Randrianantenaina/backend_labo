import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teste } from './entities/teste.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TesteService {
  constructor(
    @InjectRepository(Teste)
    private readonly testeRepository: Repository<Teste>,
  ) {}

  async create(createTesteDto: CreateTesteDto) {
    const teste = this.testeRepository.create(createTesteDto);
    return await this.testeRepository.save(teste);
  }

  async findAll() {
    return this.testeRepository.find({
      relations: ['echantillon'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const teste = await this.testeRepository.findOne({
      where: { id },
      relations: ['echantillon'],
    });
    if (!teste) {
      throw new NotFoundException(`Teste with ID ${id} not found`);
    }
    return teste;
  }

  async update(id: number, updateTesteDto: UpdateTesteDto) {
    const teste = await this.findOne(id);
    if (!teste) {
      throw new NotFoundException(`Teste with ID ${id} not found`);
    }
    Object.assign(teste, updateTesteDto);
    return await this.testeRepository.save(teste);
  }

  async remove(id: number) {
    const teste = await this.findOne(id);
    if (!teste) {
      throw new NotFoundException(`Teste with ID ${id} not found`);
    }
    return await this.testeRepository.remove(teste);
  }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateTesteDto } from './dto/create-teste.dto';
// import { UpdateTesteDto } from './dto/update-teste.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Teste } from './entities/teste.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class TesteService {
//   constructor(
//     @InjectRepository(Teste)
//     private readonly testeRepository: Repository<Teste>,
//   ){}
//   async create(createTesteDto: CreateTesteDto) {
//     const teste = this.testeRepository.create(createTesteDto);
//     return await this.testeRepository.save(teste);
//   }

//   async findAll() {
//     return this.testeRepository.find({relations: ['echantillon']});
//   }

//   async findOne(id: number) {
//     const teste = await this.testeRepository.findOne({ where: {id}, relations: ['echantillon']});
//     if(!teste){
//       throw new NotFoundException(`Teste with ID ${id} not found`);
//     }
//     return teste;
//   }

//   async update(id: number, updateTesteDto: UpdateTesteDto) {
//     const teste =  await this.findOne(id);
//     Object.assign(teste, updateTesteDto);
//     return await this.testeRepository.save(teste);
//   }

//   async remove(id: number) {
//     const teste = await this.findOne(id);
//     return await this.testeRepository.remove(teste);
//   }
// }

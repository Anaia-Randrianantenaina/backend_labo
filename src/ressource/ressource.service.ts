import { Inject, Injectable } from '@nestjs/common';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { UpdateRessourceDto } from './dto/update-ressource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ressource } from './entities/ressource.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RessourceService {
 constructor(
  @InjectRepository(Ressource)
  private readonly ressourceRepository : Repository<Ressource>){

  }
  async create(createRessourceDto: CreateRessourceDto) {
    const ressource = this.ressourceRepository.create(createRessourceDto);
  return await this.ressourceRepository.save(ressource);
  }

  async findAll() {
    return await this.ressourceRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} ressource`;
  }

  update(id: string, updateRessourceDto: UpdateRessourceDto) {
    return `This action updates a #${id} ressource`;
  }

  remove(id: string) {
    return `This action removes a #${id} ressource`;
  }
}



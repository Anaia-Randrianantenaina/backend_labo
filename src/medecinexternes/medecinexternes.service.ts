import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedecinexterneDto } from './dto/create-medecinexterne.dto';
import { UpdateMedecinexterneDto } from './dto/update-medecinexterne.dto';
import { Medecinexterne } from './entities/medecinexterne.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedecinexternesService {
  constructor(
    @InjectRepository(Medecinexterne)
    private readonly MedecinexterneRepository:
    Repository<Medecinexterne>){

    }

  async create(createMedecinexterneDto: CreateMedecinexterneDto) {
    const medecinEx = this.MedecinexterneRepository.create
    (createMedecinexterneDto);
    return await this.MedecinexterneRepository.save(medecinEx);
  }

  async findAll() {
    return this.MedecinexterneRepository.find();
  }

  async findOne(id: string) {
    return await this.MedecinexterneRepository.findOne({
      where: {id}
    });
  }

  async update(id: string, updateMedecinexterneDto: UpdateMedecinexterneDto) {
    const medecinEx = await this.findOne(id)
    if(!id){
      throw new NotFoundException()
    }
    Object.assign(medecinEx, updateMedecinexterneDto);
    return await this.MedecinexterneRepository.save(medecinEx);
  }

  async remove(id: string) {
    const medecinEx = await this.findOne(id)
    if(!medecinEx){
      throw new NotFoundException()
    }
    return this.MedecinexterneRepository.remove(medecinEx);
  }

  async NomME(nomME: string){
    return await this.MedecinexterneRepository.findOne({
      where: {nomME}
    });
  }
}

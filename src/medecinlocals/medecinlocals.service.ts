import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedecinlocalDto } from './dto/create-medecinlocal.dto';
import { UpdateMedecinlocalDto } from './dto/update-medecinlocal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medecinlocal } from './entities/medecinlocal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedecinlocalsService {
  constructor(
    @InjectRepository(Medecinlocal)
    private readonly MedecinlocalRepository:
    Repository<Medecinlocal>){

    }

  async create(createMedecinlocalDto: CreateMedecinlocalDto) {
    const medecinlocal = this.MedecinlocalRepository.create
    (createMedecinlocalDto);
    return await this.MedecinlocalRepository.save(medecinlocal);
  }

  async findAll() {
    return await this.MedecinlocalRepository.find();
  }

  async findOne(matricule: string) {
    return await this.MedecinlocalRepository.findOne({
      where: {matricule}
    });
  }

  async update(matricule: string, updateMedecinlocalDto: UpdateMedecinlocalDto) {
    const medecinlocal = await this.findOne(matricule)
    if(!matricule){
      throw new NotFoundException()
    }
    Object.assign(medecinlocal, updateMedecinlocalDto);
    return await this.MedecinlocalRepository.save(medecinlocal);
  }

  async remove(matricule: string) {
    const medecinlocal = await this.findOne(matricule)
    if(!medecinlocal){
      throw new NotFoundException()
    }
    return this.MedecinlocalRepository.remove(medecinlocal);
  }

  async findMaxNumE(): Promise<number> {
    const maxNum = await this.MedecinlocalRepository
      .createQueryBuilder('medecinlocal')
      .select('MAX(medecinlocal.nomP)', 'max')
      .getRawOne();
    
    return maxNum ? maxNum.max : 0;
  }

  async testa(): Promise<string[]> {
    const medecinlocals = await this.MedecinlocalRepository
      .createQueryBuilder('medecinlocal')
      .select('medecinlocal.matricule')
      .orderBy('medecinlocal.matricule', 'ASC')
      .getMany();

    return medecinlocals.map(medecin => medecin.matricule);
  }

  async findSer(matricule: string) {
    return await this.MedecinlocalRepository.findOne({
      where: { matricule },
      select: ['serviceP'],
    });
  }

}

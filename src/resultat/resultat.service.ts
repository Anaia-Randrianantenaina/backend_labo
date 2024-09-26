import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultatDto } from './dto/create-resultat.dto';
import { UpdateResultatDto } from './dto/update-resultat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resultat } from './entities/resultat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResultatService {
  constructor(
    @InjectRepository(Resultat)
    private readonly resultatRepository: Repository<Resultat>,
  ) {}
  async create(createResultatDto: CreateResultatDto) {
    const resultat = this.resultatRepository.create(createResultatDto);
    return await this.resultatRepository.save(resultat);
  }

  async findAll() {
    return this.resultatRepository.find({
      relations: ['teste'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const resultat = await this.resultatRepository.findOne({
      where: { id },
      relations: ['teste'],
    });
    if (!resultat) {
      throw new NotFoundException(`resultat with ID ${id} not found`);
    }
    return resultat;
  }

  async update(id: number, updateResultatDto: UpdateResultatDto) {
    const resultat = await this.findOne(id);
    Object.assign(resultat, updateResultatDto);
    return await this.resultatRepository.save(resultat);
  }

  async remove(id: number) {
    const resultat = await this.findOne(id);
    return await this.resultatRepository.remove(resultat);
  }
}

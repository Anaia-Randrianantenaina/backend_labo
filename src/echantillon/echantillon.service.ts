import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEchantillonDto } from './dto/create-echantillon.dto';
import { UpdateEchantillonDto } from './dto/update-echantillon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Echantillon } from './entities/echantillon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EchantillonService {
  constructor(
    @InjectRepository(Echantillon)
    private readonly echantillonRepository: Repository<Echantillon>, // Corrigé
  ) {}

  async create(createEchantillonDto: CreateEchantillonDto) {
    const echantillon = this.echantillonRepository.create(createEchantillonDto);
    return await this.echantillonRepository.save(echantillon);
  }

  async findAll() {
    // Enlever le premier return et garder seulement celui avec les relations
    return this.echantillonRepository.find({
      relations: ['patient'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const echantillon = await this.echantillonRepository.findOne({
      where: { id },
      relations: ['patient'],
    });
    if (!echantillon) {
      throw new NotFoundException(`Echantillon with ID ${id} not found`);
    }
    return echantillon;
  }

  async update(id: number, updateEchantillonDto: UpdateEchantillonDto) {
    const echantillon = await this.findOne(id); // Utilise la méthode findOne qui gère déjà NotFoundException
    Object.assign(echantillon, updateEchantillonDto);
    return await this.echantillonRepository.save(echantillon);
  }

  async remove(id: number) {
    const echantillon = await this.findOne(id); // Utilise la méthode findOne qui gère déjà NotFoundException
    return await this.echantillonRepository.remove(echantillon);
  }
}

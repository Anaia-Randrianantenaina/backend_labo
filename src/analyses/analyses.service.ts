import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Analysis } from './entities/analysis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalysesService {
  constructor(
    @InjectRepository(Analysis)
    private readonly analyseRepository:
    Repository<Analysis>){
  }

  async create(createAnalysisDto: CreateAnalysisDto) {
    const analyse = await this.analyseRepository.create
    (createAnalysisDto);
    return await this.analyseRepository.save(analyse);
  }

  async findAll() {
    return await this.analyseRepository.find();
  }

  async findOne(id: number) {
    return await this.analyseRepository.findOne({
      where:{ id }
    });
  }

  async update(id: number, updateAnalysisDto: UpdateAnalysisDto) {
    const analyse = await this.findOne(id);
    if(!analyse){
      throw new NotFoundException()
    }
    Object.assign(analyse, updateAnalysisDto)
    return await this.analyseRepository.save(analyse);
  }

  async remove(id: number) {
    const analyse = await this.findOne(id)
    if(!analyse){
      throw new NotFoundException()
    }
    return this.analyseRepository.remove(analyse);
  }

  async findexam(id: number) {
    return await this.analyseRepository.findOne({
      where: { id },
      select: ['examen'],
    });
  }

  async findid(id: number) {
    const analysis = await this.analyseRepository.findOne({
      where: { id },
      relations: ['id_medecinL'], // Charger la relation avec Medecinlocal
    });
  
    // Retourner uniquement ce dont vous avez besoin
    if (analysis && analysis.id_medecinL) {
      return {
        id_medecinL: analysis.id_medecinL.matricule, // Retourner uniquement le matricule ou tout autre champ
      };
    }
  
    return null; // Si pas trouvé ou pas de relation
  }

  async findbyNum(num_hospi: number){
    return await this.analyseRepository.find();
  }
}
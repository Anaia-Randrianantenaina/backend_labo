import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Historique } from './entities/historique.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoriqueService {
   constructor(
    @InjectRepository(Historique)
    private readonly historiqueRepository : Repository<Historique>){

    }

  async create(createHistoriqueDto: CreateHistoriqueDto) {
  const historique = this.historiqueRepository.create(createHistoriqueDto);
  return await this.historiqueRepository.save(historique);
  }

  async getMaxPrice(): Promise<number> {
    const result = await this.historiqueRepository.query(
      `SELECT MAX(id) as max FROM historique`
    );

    return result[0].max;
  }

   // Méthode pour obtenir l'historique avec l'ID maximal
   async getMaxIdHistorique(): Promise<Historique> {
    // Utiliser createQueryBuilder pour écrire une requête SQL personnalisée
    const historique = await this.historiqueRepository
      .createQueryBuilder('historique') // 'historique' est l'alias de la table
      .orderBy('historique.id', 'DESC') // Tri par 'id' de manière décroissante pour que l'enregistrement avec l'ID le plus élevé soit en premier
      .getOne(); // Récupère le premier résultat de la requête triée

    return historique;
  }


  async findAll() {
    return await this.historiqueRepository.find();
  }

  async findOne(id: number) {
    return await this.historiqueRepository.findOne({
      where : {id}
    });
  }

  async update(id: number, updateHistoriqueDto: UpdateHistoriqueDto) {
    const historique = await this.findOne(id);

    if (!historique) {
      throw new NotFoundException();
    }

    Object.assign(historique, updateHistoriqueDto);

    return await this.historiqueRepository.save(historique);
  }

  async remove(id: number) {
    const historique = await this.findOne(id);

    if (!historique) {
      throw new NotFoundException();
    }
    return await this.historiqueRepository.remove(historique);
  }
}

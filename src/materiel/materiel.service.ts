import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materiel } from './entities/materiel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterielService {
  constructor(
    @InjectRepository(Materiel)
    private readonly materielRepository : Repository<Materiel>){

    }

    async create(createMaterielDto : CreateMaterielDto) {
      const materiel = this.materielRepository.create(createMaterielDto);
      return await this.materielRepository.save(materiel);
    }
  
  async findAll() {
    return await this.materielRepository.find();
  }

  async findOne(id: number) {
    return await this.materielRepository.findOne({
      where : {id}
    });
  }

  async update(id: number, updateMaterielDto: UpdateMaterielDto) {
    const materiel = await this.findOne(id);

    if (!materiel) {
      throw new NotFoundException();
    }

    Object.assign(materiel, updateMaterielDto);

    return await this.materielRepository.save(materiel);
  }

  async remove(id: number) {
   const materiel = await this.findOne(id);

   if (!materiel) {
    throw new NotFoundException();
   }
   return await this.materielRepository.remove(materiel);
  }

   // Méthode pour compter le nombre d'enregistrements dans la table Historique
   async countMateriel(): Promise<number> {
    const count = await this.materielRepository
      .createQueryBuilder('materiel')
      .getCount(); // Utilise getCount() pour effectuer une requête COUNT

    return count;
  }

  // Méthode pour compter le nombre d'enregistrements avec une condition
  async counteBonne(): Promise<number> {
    const count = await this.materielRepository
      .createQueryBuilder('materiel')
      .where('materiel.etat = :etat', { etat: 'bonne' }) // Ajoute la condition WHERE
      .getCount(); // Utilise getCount() pour effectuer une requête COUNT
    return count;
  }

   // Méthode pour compter le nombre d'enregistrements avec une condition
   async counteMauvais(): Promise<number> {
    const count = await this.materielRepository
      .createQueryBuilder('materiel')
      .where('materiel.etat = :etat', { etat: 'mauvais' }) // Ajoute la condition WHERE
      .getCount(); // Utilise getCount() pour effectuer une requête COUNT
    return count;
  }

     // Méthode pour compter le nombre d'enregistrements avec une condition
     async counteMoyen(): Promise<number> {
      const count = await this.materielRepository
        .createQueryBuilder('materiel')
        .where('materiel.etat = :etat', { etat: 'moyen' }) // Ajoute la condition WHERE
        .getCount(); // Utilise getCount() pour effectuer une requête COUNT
      return count;
    }

    async getMax(): Promise<number> {
      const result = await this.materielRepository.query(
        `SELECT MAX(id) as max FROM materiel`
      );
  
      return result[0].max;
    }

    async getAllNames(): Promise<number[]> {
      return this.materielRepository
        .createQueryBuilder('materiel')
        .select('materiel.id')
        .getMany()
        .then(materiel => materiel.map(materiel => materiel.id));
    }
}

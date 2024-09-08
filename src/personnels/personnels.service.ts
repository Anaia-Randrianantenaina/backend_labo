import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { Repository } from 'typeorm';
import { Personnel } from './entities/personnel.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonnelsService {
  constructor(
    @InjectRepository(Personnel) private readonly personnelsRepository: Repository<Personnel>,
  ) {}

  async create(createPersonnelDto: CreatePersonnelDto) {
    const personnel = this.personnelsRepository.create(createPersonnelDto);
    const result = await this.personnelsRepository.save(personnel);
    return result;
  }

  async findAll() {
    return await this.personnelsRepository.find();
  }

  async findOne(id: number) {
    return await this.personnelsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePersonnelDto: UpdatePersonnelDto) {
    const personnel = await this.findOne(id);
    if (!personnel) {
      throw new NotFoundException();
    }
    Object.assign(personnel, updatePersonnelDto);
    return await this.personnelsRepository.save(personnel);
  }

  async remove(id: number) {
    const personnel = await this.findOne(id);
    if (!personnel) {
      throw new NotFoundException();
    }
    await this.personnelsRepository.remove(personnel);
  }

  async getPersonnelStats() {
    const stats = await this.personnelsRepository
      .createQueryBuilder('personnel')
      .select('personnel.post', 'post')
      .addSelect('COUNT(*)', 'count')
      .groupBy('personnel.post')
      .getRawMany();

    console.log('Raw Stats:', stats);  // Ligne de débogage

    return stats.map(stat => ({
      post: stat.post,
      count: parseInt(stat.count, 10), // Assure-toi que le count est un nombre
    }));
  }
}

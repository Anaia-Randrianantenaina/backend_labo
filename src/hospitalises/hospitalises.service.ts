import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHospitaliseDto } from './dto/create-hospitalise.dto';
import { UpdateHospitaliseDto } from './dto/update-hospitalise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospitalise } from './entities/hospitalise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalisesService {
  constructor(
    @InjectRepository(Hospitalise)
    private readonly hospitaliseRepository: Repository<Hospitalise>,
  ) {}

  async create(createHospitaliseDto: CreateHospitaliseDto) {
    const hospitalise = this.hospitaliseRepository.create(createHospitaliseDto);
    return await this.hospitaliseRepository.save(hospitalise);
  }

  async findAll() {
    return await this.hospitaliseRepository.find();
  }

  async findOne(num: number) {
    return await this.hospitaliseRepository.findOne({
      where: { num },
    });
  }

  async update(num: number, updateHospitaliseDto: UpdateHospitaliseDto) {
    const hospitalise = await this.findOne(num);
    if (!hospitalise) {
      throw new NotFoundException();
    }
    Object.assign(hospitalise, updateHospitaliseDto);
    return await this.hospitaliseRepository.save(hospitalise);
  }

  async remove(num: number) {
    const hospitalise = await this.findOne(num);
    if (!hospitalise) {
      throw new NotFoundException();
    }
    return this.hospitaliseRepository.remove(hospitalise);
  }

  async findMaxNum(): Promise<number> {
    const maxNum = await this.hospitaliseRepository
      .createQueryBuilder('hospitalise')
      .select('MAX(hospitalise.num)', 'max')
      .getRawOne();

    return maxNum ? maxNum.max : 0;
  }

  async tousNum(): Promise<number[]> {
    const result = await this.hospitaliseRepository
      .createQueryBuilder('hospitalise')
      .select('hospitalise.num')
      .getRawMany();

    const numero = result.map(row => row.num);  // Retourne un tableau de nombres

    return numero;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const patient = this.patientRepository.create(createPatientDto);

    return await this.patientRepository.save(patient);
  }

  async findAll() {
    return await this.patientRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return await this.patientRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.findOne(id);
    if (!patient) {
      throw new NotFoundException();
    }

    Object.assign(patient, updatePatientDto);

    return await this.patientRepository.save(patient);
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    if (!patient) {
      throw new NotFoundException();
    }

    return await this.patientRepository.remove(patient);
  }

  async findByNom(nom: string): Promise<{ nom: string }[]> {
    const patients = await this.patientRepository.find({ where: { nom } });
    return patients.map((patient) => ({ nom: patient.nom }));
  }

  async affichage(): Promise<Patient[]> {
    return this.patientRepository.find({
      relations: [
        'echantillons',
        'echantillons.testes',
        'echantillons.testes.resultats',
      ],
    });
  }
}

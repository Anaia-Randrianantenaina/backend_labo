import { Externe } from 'src/externes/entities/externe.entity';
import { Hospitalise } from 'src/hospitalises/entities/hospitalise.entity';
import { Teste } from 'src/teste/entities/teste.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'echantillon' })
export class Echantillon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  date_prelevement: string;

  @ManyToOne(() => Hospitalise, (patient) => patient.echantillons, {
    onDelete: 'CASCADE',
  })
  patient: Hospitalise;


  @ManyToOne(() => Externe, (patientE) => patientE.echantillons, {
    onDelete: 'CASCADE',
  })
  patientE: Externe;
  @OneToMany(() => Teste, (teste) => teste.echantillon)
  testes: Teste[];
}

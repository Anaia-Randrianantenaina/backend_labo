import { Echantillon } from 'src/echantillon/entities/echantillon.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({name: 'patient'})
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  nom: string;

  @Column()
  age: string;

  @Column()
  rc: string;

  @Column()
  adresse: string;

  @Column()
  sexe: string;

  @Column()
  prescripteur: string;

  @Column()
  service: string;

  @OneToMany(() => Echantillon, (echantillon) => echantillon.patient)
  echantillons: Echantillon[];
}

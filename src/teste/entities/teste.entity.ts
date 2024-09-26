import { Echantillon } from 'src/echantillon/entities/echantillon.entity';
import { Resultat } from 'src/resultat/entities/resultat.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'teste' })
export class Teste {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unite: string;

  @Column({ type: 'text', nullable: true })
  sous_unite: string;

  @Column()
  parametre: string;

  @ManyToOne(() => Echantillon, (echantillon) => echantillon.testes, {
    onDelete: 'CASCADE',
  })
  echantillon: Echantillon;

  @OneToMany(() => Resultat, (resultat) => resultat.teste)
  resultats: Resultat[];
}

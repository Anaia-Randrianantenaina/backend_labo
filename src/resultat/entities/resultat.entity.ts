import { Teste } from "src/teste/entities/teste.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'resultat',})
export class Resultat {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teste, (teste) => teste.resultats, {
      onDelete: 'CASCADE',
    })
    teste: Teste;

}

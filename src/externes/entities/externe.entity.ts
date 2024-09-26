import { Echantillon } from "src/echantillon/entities/echantillon.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'externes'})
export class Externe {
    @PrimaryColumn()
    numE: number;

    @Column({type: "text", nullable: false})
    nomE: string;

    @Column({type: "text", nullable: true})
    prenomE: string;

    @Column({type: "text", nullable: false})
    sexeE: string;

    @Column({type: "text", nullable: false})
    adresseE: string;

    @Column({type: "text", nullable: false})
    ageE: string;

    @Column({type: "text", nullable: true})
    date_naissE: string;

    @Column ({type: "text", nullable: false})
    date_ajoutE: string

    @OneToMany(() => Echantillon, (echantillon) => echantillon.patient)
  echantillons: Echantillon[];
}

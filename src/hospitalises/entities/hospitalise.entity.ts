import { Echantillon } from "src/echantillon/entities/echantillon.entity";
import { Column, Entity, OneToMany, PrimaryColumn} from "typeorm";

@Entity({name: "hospitalises"})
export class Hospitalise {
    @PrimaryColumn()
    num: number;

    @Column({type: "text", nullable: false})
    nom: string;

    @Column({type: "text", nullable: true})
    prenom: string;

    @Column({type: "text", nullable: false})
    service: string;

    @Column({type: "text", nullable: false})
    sexe: string;

    @Column({type: "text", nullable: false})
    adresse: string;

    @Column({type: "text", nullable: false})
    age: string;

    @Column({type: "text", nullable: true})
    date_naiss: string;

    @Column ({type: "text", nullable: false})
    date_ajout: string

    @OneToMany(() => Echantillon, (echantillon) => echantillon.patient)
  echantillons: Echantillon[];
}

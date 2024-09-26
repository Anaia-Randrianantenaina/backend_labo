import { Externe } from "src/externes/entities/externe.entity";
import { Hospitalise } from "src/hospitalises/entities/hospitalise.entity";
import { Medecinexterne } from "src/medecinexternes/entities/medecinexterne.entity";
import { Medecinlocal } from "src/medecinlocals/entities/medecinlocal.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "analyses"})
export class Analysis {
    //ENTITE ANALYSE
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", nullable: false})
    examen: string;

    @Column({type:"integer", nullable: true})
    num_quit: number;

    @Column({type:"text", nullable: true})
    rc: string;

    @Column({type:"text", nullable: true})
    payement: string;

    @Column({type:"text", nullable: true})
    resultat: string;

    @Column({type:"text", nullable: false})
    date_analyse: string;

    //CLE ETRANGER
    @ManyToOne(()=> Hospitalise, hospitalise => hospitalise.num, { nullable: true })
    @JoinColumn({name: "num_hospi"})
    num_hospi: Hospitalise

    @ManyToOne(()=> Medecinlocal, medecinlocal => medecinlocal.matricule, { nullable: true })
    @JoinColumn({name: "id_medecinL"})
    id_medecinL: Medecinlocal

    @ManyToOne(()=> Externe, externe => externe.numE, { nullable: true })
    @JoinColumn({name: "num_externe"})
    num_externe: Externe

    @ManyToOne(()=> Medecinexterne, medecinexterne => medecinexterne.id, { nullable: true })
    @JoinColumn({name: "id_medecinE"})
    id_medecinE: Medecinexterne
}
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'materiel'})
export class Materiel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type : 'text', nullable : false})
    nom_materiel : string;

    @Column({type : 'text',default :'bonne' , nullable : false})
    etat : string;

    @Column({type:'date'})
    date_arriver : Date;

    @Column()
    provenance : string;

    @Column()
    prix : number;  

    @Column()
    emplacement : string;
}

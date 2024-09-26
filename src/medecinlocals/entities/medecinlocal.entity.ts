import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "medecinlocals"})
export class Medecinlocal {
    @PrimaryColumn()
    matricule: string;

    @Column({type: 'text', nullable:false})
    nomP: string;

    @Column({type:'text', nullable: false})
    contact: string;

    @Column({type: 'text', nullable: false})
    serviceP: string;
}

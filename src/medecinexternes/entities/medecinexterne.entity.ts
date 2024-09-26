import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "medecinexternes"})
export class Medecinexterne {
    @PrimaryColumn()
    id: string;

    @Column({type: "text", nullable: false})
    nomME: string;

    @Column({type: "text", nullable: false})
    contact: string;

    @Column({type:"text", nullable: false})
    adresseME: string;
}

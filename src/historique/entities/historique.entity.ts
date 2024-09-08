import { truncate } from "fs/promises";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'historique'})
export class Historique {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type : 'date'})
    date : Date;

    @Column({type:'text'})
    description : string;

    @Column({type : 'text'})
    action : string;

    @Column({default:0, nullable :true})
    nombre : number;

    @Column({type : 'text', default : 'null' , nullable : true})
    quantite : string;

    @Column({default:0, nullable : true })
    ajoute : number;

    @Column({type : 'text', default : 'aucun',nullable : true})
    commentaire: string;
}

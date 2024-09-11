import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'intrant'})
export class Intrant {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique:true})
    presentation : string;

    @Column()
    designation : string;

    @Column({nullable : true})
    forme: string;

    @Column({default : 1})
    dosage_forme : number;

    @Column({nullable : true})
    unite_dosage :string;

    @Column()
    unite : string;

    @Column()
    contenu : number;

    @Column()
    prix : number;

    @Column({nullable : true})
    date_prescription: Date;

    @Column({nullable : true})
    numero_lot : number;

    @Column()
    quantite : number;

    @Column({default : 'pièce(s)'})
    unite_mesure: string;

    @Column({default : 1})
    dosage : number;

    @Column({default : 0})
    utilise : number;

}

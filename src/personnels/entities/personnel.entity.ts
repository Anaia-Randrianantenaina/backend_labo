import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'personnels'})
export class Personnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    matricule: string;


    @Column({ type: 'text', nullable: true })
    nom: string;


    @Column({ type: 'text', nullable: true })
    prenom: string;


    @Column({ type: 'text', nullable: true })
    poste: string;


    @Column({ type: 'text', nullable: true })
    adresse: string;


    @Column({ type: 'text', nullable: true })
    contacte: string;
}

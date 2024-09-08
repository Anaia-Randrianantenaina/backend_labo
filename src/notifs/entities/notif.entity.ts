import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : 'notifs'})
export class Notif {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    message: string;
}

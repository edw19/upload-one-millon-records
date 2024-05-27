import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marketCode: string;

    @Column()
    uniqueIdentifier: string;
    @Column()
    sourceSystem: string;
    @Column()
    sourceSystemContactId: string;
    @Column()
    name: string;
    @Column()
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    phone1: string;
    @Column()
    phone1Type: string;
    @Column()
    phone2: string;
    @Column()
    phone2Type: string;
    @Column()
    email: string;
    @Column()
    segmentation: string;
    @Column()
    score: string;
    @Column()
    recordDate: string;
    @Column()
    status: string;
}
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;

    @Column({length: 25}) fullName: string;

    @Column() birthday: string;

    @Column() isActive: boolean;
}

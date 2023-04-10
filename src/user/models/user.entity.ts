import { Department } from "src/department/models/department.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'date'})
    birthday: Date;

    @ManyToOne(() => Department, (department)=> department.users, {onDelete: 'SET NULL'})
    department: Department; 
}
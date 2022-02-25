import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
        Index,
        OneToMany
} from 'typeorm';

import { Category } from '../entity/category'

export enum Status {
        BACKlOG = 'Backlog',
	IN_PROGRESS = 'In Progress',
        DONE = 'Done'
}



@Entity('user')
export class User extends BaseEntity{
        @PrimaryGeneratedColumn()
	id: number;

        @Column({
                 nullable: false 
        })
	Title: string;

	@Column({
                nullable: true
        })
        Description : string;

        @Column({
		type: 'enum',
		enum: Status,
	})
	Status: string;

        @Column({
                nullable: true
        })
         C_Status : string;

        @Column({
                type: 'datetime',
                default: () => 'NOW()',
               
        })
        @Index()
	Date: string;

        

        @OneToMany(
		() => Category,
		(categories) => categories.user
	)
	category: Category[];


}
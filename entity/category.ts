import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
        ManyToOne,
        JoinColumn,
        Index
} from 'typeorm';

import { User } from '../entity/user';

export enum categories {
	Home = 'Home',
	Maintain = 'Maintain',
        Time = 'Time'
}

@Entity('category')
export class Category extends BaseEntity{
        @PrimaryGeneratedColumn()
	id: number;

        @Column({
                 nullable: false 
        })
	Name: string;

	

        @Column({
		type: 'text',
		
	})
	category: string;

        @ManyToOne(
		() => User,
		(user) => user.category,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn()
	user: User;
}
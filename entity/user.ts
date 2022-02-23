import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
        Index
} from 'typeorm';

export enum Status {
        BACKlOG = 'Backlog',
	IN_PROGRESS = 'In Progress',
        DONE = 'Done'
}

@Entity()
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
                type: 'datetime',
                default: () => 'NOW()',
        })
        @Index()
	Date: string;


}
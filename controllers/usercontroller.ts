import { User } from '../entity/user';
import {  getConnection, createQueryBuilder } from 'typeorm'; 

//create user
export const createUser =  async (req: any, res:any) => {
	const {
		Title,
		Description,
		Status,
                Date
		
	} = req.body;

	const user = User.create({
		Title: Title,
		Description: Description,
		Status: Status,
                Date: Date
		
	});

	await user.save();

	return res.json(user);
};


//getuser
export const viewUser = async(req:any , res: any)=>{
         
        const { id } = req.params;
        const user = await getConnection()
        .createQueryBuilder()
	.select('user')
	.from(User,"user")
	.where("user.id = :id", {id: id})
	.getOne();
        //.getMany();

        return res.json(user);
}

export const viewUsers = async(req:any ,  res: any)=>{
        const user = await getConnection()
        .createQueryBuilder()
	.select('user')
	.from(User,"user")
	
        .getMany();

        return res.json(user);
}


//update user
export const updateUser =  async (req: any, res:any) => {
	const {
		Title,
		Description,
		Status,
                Date
		
	} = req.body;

	const { id } = req.params;

	      const user = await getConnection()
	      .createQueryBuilder()
	      .update(User)
	      .set({Title: Title,
		Description: Description,
		Status: Status,
                Date: Date})
	      
	      .where("id = :id", {id: id})
	      .execute();

	      return res.json(user);
};


//delete user
export const deleteUser = async (req: any, res: any) => {
	const { id } = req.params;

	const response = await User.delete(
		id
	);

	return res.json(response);
}
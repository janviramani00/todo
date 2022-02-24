import { User } from '../entity/user';
import { getConnection, createQueryBuilder, getCustomRepository, getManager } from 'typeorm';
import { categories } from '../entity/category';
import { Category } from '../entity/category';

//create user
export const createUser = async (req: any, res: any) => {
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
export const viewUser = async (req: any, res: any) => {

        const { id } = req.params;
        const user = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(User, "user")
                .where("user.id = :id", { id: id })
                .getOne();
        //.getMany();

        return res.json(user);
}

export const viewUsers = async (req: any, res: any) => {
        const user = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(User, "user")

                .getMany();

        return res.json(user);
}


//update user
export const updateUser = async (req: any, res: any) => {
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
                .set({
                        Title: Title,
                        Description: Description,
                        Status: Status,
                        Date: Date
                })

                .where("id = :id", { id: id })
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

//edit user

export const editUser = async (req: any, res: any) => {

        const { } = req.body;

        const { id } = req.params;



        const user = await getConnection()
                .createQueryBuilder()
                .update(User)
                .set(req.body)

                .where("id = :id", { id: id })
                .execute();

        return res.json(user);

}


//create category
export const createCategory = async (req: any, res: any) => {

        const { id } = req.params;

        const { Name, category } = req.body;

        const user = await User.findOne(
                parseInt(id)
        );

        if (!user) { return res.json({ msg: 'user not found' }) }

        const { Home, Maintain, Time } = categories;


        if (category === Home || category === Maintain || category === Time) {
                user.C_Status = "available";
                
        }
        else {
               user.C_Status = "not available";
               
        }

        const add = await Category.create({
                Name,
                user,
                category

        });

        await add.save();

        await user.save();

         return res.json(user);
};

//delete category

export const deleteCategory = async (req: any, res: any) => {
        const { id } = req.params;

        const response = await Category.delete(
                id
        );

        return res.json(response);
}



//edit category
export const editCategory = async (req: any, res: any) => {

        const { } = req.body;

        const { id } = req.params;

        const users = await User.findOne(
                parseInt(id)
        );

        if (!users) { return res.json({ msg: 'user not found' }) }

        const { Home, Maintain, Time } = categories;


        

        const user = await getConnection()
                .createQueryBuilder()
                .update(Category)
                .set(req.body)

                .where("id = :id", { id: id })
                .execute();

        const update = req.body;
        if (update === Home || Maintain || Time){
                users.C_Status = "available";
       }else{
               users.C_Status = "not available";
       }

        await users.save()

        return res.json(user);

}

//get category

export const getCategory = async (req: any, res: any) => {

        const { id } = req.params;
        const user = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(Category, "user")
                .where("user.id = :id", { id: id })
                .getOne();
        //.getMany();

        return res.json(user);
}

export const getCategories = async (req: any, res: any) => {
        const user = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(Category, "user")

                .getMany();

        return res.json(user);
}



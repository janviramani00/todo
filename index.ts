import { User } from './entity/user';
import  express from 'express';
import { Router } from './routes/router'
import { createConnection } from 'typeorm';
import { Category } from './entity/category';

const app = express();

app.use(express.json());

const main = async () => {
	try {
		await createConnection({
			type: "mysql",
                        host: "localhost",
                        username: "root",
                        password: "9512760660",
                        database: "todo",
                        entities: [User, Category],
			synchronize: true,
			
		});
		console.log('Connected ');

		app.use(express.json());

                app.use(Router);

		
		
		

		app.listen(3000, () => {
			console.log('Now running on port 3000');
		});
	} catch (error) {
		console.error(error);
		
	}
};

main();
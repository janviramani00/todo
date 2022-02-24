import { createCategory, createUser, deleteCategory, deleteUser, editCategory, editUser, getCategories, getCategory, updateUser, viewUser, viewUsers } from '../controllers/usercontroller';
import express from 'express';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', viewUser);
router.get('/user', viewUsers);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser)
router.patch('/user/:id', editUser);



router.post('/user/:id/category', createCategory);
router.delete('/category/:id', deleteCategory);
router.patch('/category/:id', editCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategory);


export { router as Router}
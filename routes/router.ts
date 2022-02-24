import { createUser, deleteUser, editUser, updateUser, viewUser, viewUsers } from '../controllers/usercontroller';
import express from 'express';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', viewUser);
router.get('/user', viewUsers);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser)
router.patch('/user/:id', editUser)


export { router as Router}
import { createUser, deleteUser, updateUser, viewUser, viewUsers } from '../controllers/usercontroller';
import express from 'express';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', viewUser);
router.get('/user', viewUsers);
router.put('/user/:id', updateUser);
router.put('/user/:id', deleteUser)


export { router as Router}
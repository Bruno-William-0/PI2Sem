import express from 'express';
import PetController from '../Controllers/PetController.js';

const PetRouter = express.Router();

PetRouter.get('/', PetController.getPet);
//PetRouter.delete();

export default PetRouter;

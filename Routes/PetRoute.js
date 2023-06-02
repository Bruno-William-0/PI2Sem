import express from 'express';
import PetController from '../Controllers/PetController.js';

const PetRouter = express.Router();

PetRouter.get('/', PetController.getPet);
PetRouter.post('/', PetController.createPet)
PetRouter.get('/:id', PetController.getPetByOwner)
PetRouter.delete('/:id', PetController.destroyPet)
PetRouter.put('/:id', PetController.updatePet)
//PetRouter.delete();

export default PetRouter;

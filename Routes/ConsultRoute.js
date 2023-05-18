import express from 'express';
import ConsultController from '../Controllers/ConsultController.js';

const ConsultRouter = express.Router();

ConsultRouter.get('/', ConsultController.getConsult);
ConsultRouter.post('/', ConsultController.createConsult);
ConsultRouter.get('/:id', ConsultController.getConsultById);
ConsultRouter.delete('/:id', ConsultController.destroyConsult);
ConsultRouter.put('/:id', ConsultController.updateConsult);

export default ConsultRouter;

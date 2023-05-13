import express from 'express';
import ConsultController from '../Controllers/ConsultController.js';

const ConsultRouter = express.Router();

ConsultRouter.get('/', ConsultController.getConsult);
//ConsultRouter.delete();

export default ConsultRouter;

import express from 'express'
import EmployerController from '../Controllers/EmployerController.js'

const EmployerRouter = express.Router();

EmployerRouter.get('/', EmployerController.getEmployer);
//EmployerRouter.delete();

export default EmployerRouter

import express from 'express'
import EmployerController from '../Controllers/EmployerController.js'

const EmployerRouter = express.Router();

EmployerRouter.get('/', EmployerController.getEmployer);
EmployerRouter.post('/', EmployerController.createEmployer)
EmployerRouter.get('/:id', EmployerController.getEmployerById)
EmployerRouter.delete('/:id', EmployerController.destroyEmployer)
EmployerRouter.put('/:id', EmployerController.updateEmployer)

//EmployerRouter.delete();

export default EmployerRouter

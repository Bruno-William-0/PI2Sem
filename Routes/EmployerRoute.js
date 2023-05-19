import express from 'express'
import EmployerController from '../Controllers/EmployerController.js'

const EmployerRouter = express.Router();

EmployerRouter.get('/', EmployerController.getEmployer);
Employerrouter.post('/', EmployerController.createEmployer)
Employerrouter.get('/:id', EmployerController.getEmployerById)
Employerrouter.delete('/:id', EmployerController.destroyEmployer)
Employerrouter.put('/:id', EmployerController.updateEmployer)

//EmployerRouter.delete();

export default EmployerRouter

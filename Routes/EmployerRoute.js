import express from 'express'
import EmployerController from '../Controllers/EmployerController.js'

const routerEmployer = express.Router()

routerEmployer.get('/', EmployerController.getEmployer)

export default routerEmployer
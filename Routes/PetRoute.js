import express from 'express'
import PetController from '../Controllers/PetController.js'

const routerPet = express.Router()
routerPet.get('/', PetController.getPets)

export default routerPet
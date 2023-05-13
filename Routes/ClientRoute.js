import express from 'express'
import ClientController from '../Controllers/ClientController.js'

const ClientRouter = express.Router()

ClientRouter.get('/', ClientController.getClient)
//ContatoRouter.delete()

export default ClientRouter
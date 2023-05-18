import express from 'express'
import ClientController from '../Controllers/ClientController.js'

const ClientRouter = express.Router()

ClientRouter.get('/', ClientController.getClient)
ClientRouter.post('/', ClientController.createClient)
ClientRouter.get('/:id', ClientController.getClientById)
ClientRouter.delete('/:id', ClientController.destroyClient)
ClientRouter.put('/:id', )
//ContatoRouter.delete()

export default ClientRouter
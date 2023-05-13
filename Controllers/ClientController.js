import { getAll } from "../Models/Client.js"
class ClientController {
    static getAll(req, res) {
        res.json(getAll())
    }
}

export default ClientController

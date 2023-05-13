import { getClient } from "../Models/Client.js"

class ClientController {
    static getClient(req,res){
        res.json(getClient())
    }

}

export default ClientController
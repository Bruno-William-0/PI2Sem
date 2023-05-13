import { getConsult } from "../Models/Consult.js"
class ConsultController {
    static getConsult(req, res){
        res.json(getConsult())
    }
}

export default ConsultController
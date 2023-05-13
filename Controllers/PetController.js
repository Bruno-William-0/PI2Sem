import { getPets } from "../Models/Pet.js";

class PetController{
    static getPets(req, res){
        res.json(getPets())
    }
}

export default PetController
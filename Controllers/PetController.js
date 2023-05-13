import { getPet } from "../Models/Pet.js";

class PetController {
  static getPet(req, res) {
    res.json(getPet());
  }


}

export default PetController;

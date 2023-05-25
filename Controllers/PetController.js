import { Pet, create, findByPk, findPet, update, destroy } from "../Models/Pet.js";

class PetController {
  static getPet(req, res) {
    res.json(findPet());
  }

  static createPet(req, res) {
    const { name, speec, breed, age } = req.body;
    if (!name || !speec || !breed || !age) {
      res.status(400).json({ error: "Nome, pelo, raça e idade são obrigatórios!" });
      return;
    }

    const pet = new Pet(name, speec, breed, age);
    create(pet);
    res.json(pet);
  }

  static getPetById(req, res) {
    const id = parseInt(req.params.id);
    const pet = findByPk(id);
    res.json(pet);
  }

  static destroyPet(req, res) {
    const id = parseInt(req.params.id);
    destroy(id);
    res.json({ message: 'Pet removido com sucesso' });
  }

  static updatePet(req, res) {
    const id = parseInt(req.params.id);
    const pet = findByPk(id);
    const { name, speec, breed, age } = req.body;
    if (!name || !speec || !breed || !age) {
      res.status(400).json({ error: 'Nome, pelo, raça e idade são obrigatórios' });
      return;
    }

    pet.name = name;
    pet.speec = speec;
    pet.breed = breed;
    pet.age = age;

    update(id, pet);
    res.json(pet);
  }

  // ...
}


export default PetController;

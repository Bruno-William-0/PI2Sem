import { Pet, getPets, create, findByPk, destroy, update } from "../Models/Pet.js";

class PetController {
  static getPet(req, res) { //este é o metodo desta classe, do controller
    res.json(this.getPets()); //anteriormente esstavamos chamando de getpet também mas isso poderia dar algum problema
  }

  static createPet(req, res){
    const { name, speec, breed, age } = req.body
    if (!name || !speec || !breed || !age){
      res.status(404).json({error: 'id, nome, especie, raça e idade'})
    return
    }

    const pet = new Pet(name, speec, breed, age)
    create(pet)
    res.json(pet)
  }

  static getPetById(req, res){
    const id = parseInt(req.params.id)
    const pet = findByPk(id)
    if(!pet){
      res.status(400).json({error: 'Pet não encontrado.'})
      return
    }
    res.json(pet)
  }

  static destroyPet(req, res){
    const id = parseInt(req.params.id)
    const pet = findByPk(id)
    if(!pet){
      res.status(404).json({error: 'Pet não encontrado.'})
    }
  }

  static updatePet(req, res){
    const id = parseInt(req.params.id)
    const pet = findByPk(id)
    if(!pet){
      res.status(404).json({error: 'Pet não encontrado.'})
    }

    const { name, speec, breed, age} = req.body
    if (!name || !speec || !breed || !age){
      res.status(404).json({error: 'Id, Nome, Especie, Raça e Idade não econtrados'})
    return
    }

    pet.name = name
    pet.speec = speec
    pet.breed = breed
    pet.age = age

    update(id, pet)
    res.json(pet)
  }

}

export default PetController;

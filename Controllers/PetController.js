import { Pet, create, findByPk, findPet, update, destroy } from "../Models/Pet.js";

class PetController {
  static async getPet(req, res) {
    try {
      const pets = await findPet();
      res.json(pets);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar os pets' });
    }
  }

  static async createPet(req, res) {
    const { name, birth, hair, breed, speec, color, size, owner} = req.body;
    if (!name || !birth || !hair || !owner || !breed || !speec || !color || !size || !owner) {
      res.status(400).json({ error: "Nome, data de nascimento, raça, pelo, cor e tamanho são obrigatórios!" });
      return;
    }

    const pet = new Pet(name, birth, hair, breed, speec, color, size, owner);
    try {
      await create(pet);
      res.json(pet);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar o pet' });
    }
  }

  static async getPetById(req, res) {
    const id = parseInt(req.params.id);
    try {
      const pet = await findByPk(id);
      if (pet) {
        res.json(pet);
      } else {
        res.status(404).json({ error: 'Pet não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar o pet' });
    }
  }

  static async destroyPet(req, res) {
    const id = parseInt(req.params.id);
    try {
      await destroy(id);
      res.json({ message: 'Pet removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover o pet' });
    }
  }

  static async updatePet(req, res) {
    const id = parseInt(req.params.id);
    const { name, birth, hair, breed, speec, color, size, owner} = req.body;
    if (!name || !birth || !hair || !owner || !breed || !speec || !color || !size || !owner) {
      res.status(400).json({ error: 'Nome, data de nascimento, raça, pelo, cor e tamanho são obrigatórios' });
      return;
    }

    try {
      const pet = await findByPk(id);
      if (pet) {
        pet.name = name;
        pet.birth = birth;
        pet.hair = hair;
        pet.breed = breed;
        pet.speec = speec;
        pet.color = color;
        pet.size = size;
        pet.owner = owner;

        await update(id, pet);
        res.json(pet);
      } else {
        res.status(404).json({ error: 'Pet não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar o pet' });
    }
  }

  // ...
}

export default PetController;

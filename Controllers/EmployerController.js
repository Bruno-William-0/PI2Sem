import { Employer, create, update, destroy, findByPk, getEmployer } from "../Models/Employer.js";

class EmployerController {
  static getEmployer(req, res) {
    res.json(getEmployer());
  }

  static createEmployer(req, res) {
    const { name, birth, phone, email, employerfunction } = req.body
    if (!name || !birth || !phone || !email || !employerfunction) {
      res.status(400).json({ error: 'nome, data de nascimento, telefone, email e função são obrigatórios' })
      return
    }

    const employer = new Employer(name, birth, phone, email, employerfunction)
    create(employer)
    res.json(employer)
  }

  static async getEmployerById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const employer = await findByPk(id);
      res.json(employer);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar funcionário por ID' });
    }
  }

  static async getEmployer(req, res) {
    try {
      const employers = await getEmployer();
      res.json(employers);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
  }

  static destroyEmployer(req, res) {
    const id = parseInt(req.params.id);
    destroy(id);
    res.json({ message: 'Funcionario removido com sucesso' });
  }

  static updateEmployer(req, res) {
    const id = parseInt(req.params.id)
    const employer = findByPk(id)
    if (!employer) {
      res.status(404).json({ error: 'Funcionário não encontrado' })
      return
    }

    const { name, birth, phone, email, employerfunction } = req.body
    if (!name || !birth || !phone || !email || !employerfunction) {
      res.status(400).json({ error: 'Nome, nascimento, telefone, email e função são obrigatórios' })
      return
    }

    employer.name = name
    employer.birth = birth
    employer.phone = phone
    employer.email = email
    employer.employerfunction = employerfunction
    update(id, employer);
    res.json(employer);
  }
}

export default EmployerController

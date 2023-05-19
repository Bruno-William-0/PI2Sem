import { getEmployer } from "../Models/Employer.js";

class EmployerController {
  static getEmployer(req, res) {
    res.json(getEmployer());
  }

  static createEmployer(req, res) {
    const {name, email, phone, adress, password, employerfunction} = req.body
      if(!name || !email || !phone || !adress || ! password || !employerfunction){
        res.status(400).json({error: 'nome, email, telefone, endereço, senha e função são obrigatórios'})
        return
      }

      const employer = new Employer(name, email, phone, adress, password, employerfunction)
      create(employer)
      res.json(employer)
  }

  static getEmployerById(req, res) {
    const id = parseInt(req.params.id)
    const employer = findByPk(id)
    if(!employer) {
      res.status(404).json({ error: 'Funcionário não encontrado'})
      return
    }
    res.json(employer)
  }

  static destroyEmployer(req, res) {
    const id = parseInt(req.params.id)
    const employer = findByPk(id)
    if(!employer) {
      res.status(404).json({error: 'Funcionário não encontrado'})
      return
    }
    destroy(id)
    res.json({ message: 'Funcionário removido com sucesso' })
  }

static updateEmployer(req, res) {
  const id = parseInt(req.params.id)
  const employer = findByPk(id)
  if(!employer) {
    res.status(404).json({ error: 'Funcionário não encontrado'})
    return
  }

  const {name, email, phone, adress, password, employerfunction} = req.body
  if(!name || !email || !phone || !adress || !password || !employerfunction) {
    res.status(400).json({error: 'Nome, email, telefone, endereço, senha e função são obrigatórios'})
    return
  }

  employer.name = name
  employer.email = email
  employer.phone = phone
  employer.adress = adress
  employer.password = password
  employer.employerfunction = employerfunction
}  
}

export default EmployerController

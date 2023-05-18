import { Consult, findAll, create, findByPk, destroy, update } from "../Models/Consult.js";

class ConsultController {
  static getConsult(req, res) {
    res.json(findAll());
  }

  static createConsult(req, res) {
    const { client, employer, date, obs } = req.body
    if (!client || !employer || !date || !obs) {
      res.status(400).json({ error: 'Id, cliente, funcionário, data e observação são obrigatórios' })
      return
    }

    const consult = new Consult(client, employer, date, obs)
    create(consult)
    res.json(consult)
  }

  static getConsultById(req, res) {
    const id = parseInt(req.params.id)
    const consult = findByPk(id)
    if (!consult) {
      res.status(400).json({ error: 'Consulta não encontrada.' })
      return
    }
    res.json(consult)
  }

  static destroyConsult(req, res) {
    const id = parseInt(req.params.id)
    const consult = findByPk(id)
    if (!consult) {
      res.status(404).json({ error: 'Consulta não encontrada.' })
      return
    }
    destroy(id)
    res.json({ message: 'Consulta removida com sucesso.' })
  }

  static updateConsult(req, res) {
    const id = parseInt(req.params.id)
    const consult = findByPk(id)
    if (!consult) {
      res.status(404).json({ error: 'Consulta não encontrada.' })
      return
    }

    const { client, employer, date, obs } = req.body
    if (!client || !employer || !date || !obs) {
      res.status(400).json({ error: 'Id, cliente, funcionário, data e observação são obrigatórios.' })
      return
    }

    //TIREI O ID PQ ESTAVA DANDO ERRO. TALVEZ NÃO PRECISE DO ID, SE ELE CRIAR AUTOMATICAMENTE.
    // const { id, client, employer, date, obs } = req.body
    // if (!id || !client || !employer || !date || !obs) {
    //   res.status(400).json({ error: 'Id, cliente, funcionário, data e observação são obrigatórios.' })
    //   return
    // }

    consult.client = client
    consult.employer = employer
    consult.date = date
    consult.obs = obs

    update(id, consult)
    res.json(consult)
  }
}

export default ConsultController;

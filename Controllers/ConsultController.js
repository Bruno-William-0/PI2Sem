import Consult from "../Models/Consult.js";

class ConsultController {
  static async list(req, res) {
    const consult = await Consult.findAll()
    res.json(consult);
  }

  static createConsult(req, res) {
    const { client, employer, date, obs } = req.body
    if (!client || !employer || !date || !obs) {
      res.status(400).json({ error: 'Id, cliente, funcionário, data e observação são obrigatórios' })
      return
    }

    const createdConsult = Consult.create({ client, employer, date, obs })
    res.status(201).json(createdConsult)

    // const consult = new Consult(client, employer, date, obs)
    // create(consult)
    // res.json(consult)
  }

  static async getConsultById(req, res) {
    const id = parseInt(req.params.id)
    const consult = await Consult.findByPk(id)
    if (!consult) {
      res.status(400).json({ error: 'Consulta não encontrada.' })
      return
    }
    res.json(consult)
  }

  static async destroyConsult(req, res) {
    const id = parseInt(req.params.id)
    const consult = await Consult.findByPk(id)
    if (!consult) {
      res.status(404).json({ error: 'Consulta não encontrada.' })
      return
    }
    await Consult.destroy({ where: { id: Consult.id } })
    res.json({ message: 'Consulta removida com sucesso.' })
  }

  static async updateConsult(req, res) {
    const id = parseInt(req.params.id)
    const consult = await Consult.findByPk(id)
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

    // consult.client = client
    // consult.employer = employer
    // consult.date = date
    // consult.obs = obs

    const updateConsult = await Consult.update({ client, employer, date, obs }, { where: { id: consult.id } })
    res.json(updateConsult)
  }
}

export default ConsultController;

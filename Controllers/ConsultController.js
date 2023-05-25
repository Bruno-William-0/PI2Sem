import { Consult, create, findByPk, findConsult, update, destroy } from "../Models/Consult.js";

class ConsultController {
  static getConsult(req, res) {
    res.json(findConsult());
  }

  static createConsult(req, res) {
    const { client, employer, date, obs } = req.body;
    if (!client || !employer || !date || !obs) {
      res.status(400).json({ error: "Cliente, funcionario, data e observacao são obrigatórios!" });
      return;
    }

    const consult = new Consult(client, employer, date, obs);
    create(consult);
    res.json(consult);
  }

  static getConsultById(req, res) {
    const id = parseInt(req.params.id);
    const consult = findByPk(id);
    res.json(consult);
  }

  static destroyConsult(req, res) {
    const id = parseInt(req.params.id);
    destroy(id);
    res.json({ message: 'Consulta removido com sucesso' });
  }

  static updateConsult(req, res) {
    const id = parseInt(req.params.id);
    const consult = findByPk(id)
    const { client, employer, date, obs } = req.body;
    if (!client || !employer || !date || !obs) {
      res.status(400).json({ error: 'Cliente, funcionario, data e observacao são obrigatórios!' });
      return;
    }

    consult.client = client;
    consult.employer = employer;
    consult.date = date;
    consult.obs = obs;

    update(id, consult);
    res.json(consult);
  }
}

export default ConsultController;
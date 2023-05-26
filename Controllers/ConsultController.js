import { Consult, create, findByPk, findConsult, update, destroy } from "../Models/Consult.js";

class ConsultController {
  static getConsult(req, res) {
    findConsult()
      .then((consults) => {
        res.json(consults);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Erro ao obter as consultas.' });
      });
  }

  static createConsult(req, res) {
    const { pet, employer, date } = req.body;
    if (!pet || !employer || !date) {
      res.status(400).json({ error: "Pet, funcionário e data são obrigatórios!" });
      return;
    }

    const consult = new Consult(pet, employer, date);
    create(consult)
      .then(() => {
        res.json(consult);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Erro ao criar a consulta.' });
      });
  }

  static getConsultById(req, res) {
    const id = parseInt(req.params.id);
    findByPk(id)
      .then((consult) => {
        if (!consult) {
          res.status(404).json({ error: 'Consulta não encontrada.' });
        } else {
          res.json(consult);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Erro ao obter a consulta.' });
      });
  }

  static destroyConsult(req, res) {
    const id = parseInt(req.params.id);
    destroy(id)
      .then((success) => {
        if (success) {
          res.json({ message: 'Consulta removida com sucesso' });
        } else {
          res.status(404).json({ error: 'Consulta não encontrada.' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Erro ao remover a consulta.' });
      });
  }

  static updateConsult(req, res) {
    const id = parseInt(req.params.id);
    const { pet, employer, date } = req.body;
    if (!pet || !employer || !date) {
      res.status(400).json({ error: 'Pet, funcionário e data são obrigatórios!' });
      return;
    }

    findByPk(id)
      .then((consult) => {
        if (!consult) {
          res.status(404).json({ error: 'Consulta não encontrada.' });
        } else {
          consult.pet = pet;
          consult.employer = employer;
          consult.date = date;

          update(id, consult)
            .then(() => {
              res.json(consult);
            })
            .catch((err) => {
              res.status(500).json({ error: 'Erro ao atualizar a consulta.' });
            });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Erro ao obter a consulta.' });
      });
  }
}

export default ConsultController;

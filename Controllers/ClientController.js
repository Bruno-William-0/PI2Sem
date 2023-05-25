import { Client, create, findByPk, findClient, update, destroy } from "../Models/Client.js";

class ClientController {
  static async getClient(req, res) {
    try{
    res.json (await findClient());
    }
    catch (error) {
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }

  }

  static createClient(req, res) {
    const { name, email, phone, address, password } = req.body;
    if (!name || !email || !phone || !address || !password) {
      res.status(400).json({ error: "Nome, email, telefone, endereço e senha são obrigatórios!" });
      return;
    }

    const client = new Client(name, email, phone, address, password);
    create(client);
    res.json(client);
  }

  static async getClientById(req, res) {
    const id = parseInt(req.params.id);
    const client = findByPk(id);
    res.json(await client);
  }

  static destroyClient(req, res) {
    const id = parseInt(req.params.id);
    destroy(id);
    res.json({ message: 'Cliente removido com sucesso' });
  }

  static updateClient(req, res) {
    const id = parseInt(req.params.id);
    const client = findByPk(id);
    const { name, email, phone, address, password } = req.body;
    if (!name || !email || !phone || !address || !password) {
      res.status(400).json({ error: 'Nome, email, telefone, endereço e senha são obrigatórios' });
      return;
    }

    client.name = name;
    client.email = email;
    client.phone = phone;
    client.address = address;
    client.password = password;

    update(id, client);
    res.json(client);
  }

  // ...
}


export default ClientController;

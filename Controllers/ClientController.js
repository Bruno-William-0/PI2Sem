import { Client, findClient, create, findByPk, destroy, update} from "../Models/Client.js"

class ClientController {
    static getClient(req,res){
        res.json(findClient())
    }



static createClient(req, res)
 {
    const { name, email, phone, address, password} = req.body
    if(!name || !email || !phone || !address || !password) {
        res.status(400).json({error: "nome, email, telefone, endereço e senha são obrigatórios!"})
  return
    }

    const client = new client(name, email, phone, address, password)
    create(client)
    res.json(client)
}


static getClientById(req, res){
    const id = parseInt(req.params.id)
    const client = findByPk(id)
    if (!consult) {
        res.status(400).json({ error: 'Cliente não encontrado.'})
        return
    }
    res.json(client)
}

static destroyClient(req, res){
    const id = parseInt(req.params.id)
    const client = findByPk(id)
    if (!consult) {
        res.status(404).json({error: 'Cliente não encontrado'})
    }
    destroy(id)
    res.json({message: 'Cliente removida com sucesso'})

}

static updateClient(req, res){
    const id = parseInt(req.params.id)
    const client = findByPk(id)
    if(!consult){
        res.status(404).json({error: 'Cliente não encontrada'})
        return
    }

    const { name, email, phone, address, password } = req.body
    if(!name || !email || !phone || !address || !password){
        res.status(404).json({error: 'name, email, phone, address, password'})
        return
    }

    client.name = name
    client.email = email
    client.phone = phone
    client.address = address
    client.password = password

    update(id, client)
    res.json(client)
}
}

export default ClientController
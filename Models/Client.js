import { findByPk } from "./Consult"

    export class Client {
        constructor(name,email,phone, address, password){
            this.name = name
            this.email = email
            this.phone = phone
            this.address = address
            this.password = password
        }
    }

    export const update = (id, consult) => {
        const clientToUpdate= findByPk(id)
        if(!clientToUpdate) {
            return false
        }

        const index = dbClient.indexOf(clientToUpdate)
        dbClient[index] = client
        return true 
    }

    export const destroy = (id) => {
        const client = findByPk(id)
        if(!client){
            return false
        }

        const index = dbClient.indexOf(client)
        dbClient.splice(index, 1)
        return true
    }

    export const findByPk = (id) => {
        return dbClient.find(client => client.id === id)
    }

    export const create = (client) => {
        client.id = dbClient.length + 1
        dbClient.push(client)
    }

    export const findClient = () => {
        return dbClient
    }

    export const dbClient = [
        new Client('1',"Guilherme","email@gmail.com","rua", '1234'),
    ]
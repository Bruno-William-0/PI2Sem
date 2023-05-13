    export class Client {
        constructor(id, name,email,phone, address, password){
            this.id = id
            this.name = name
            this.email = email
            this.phone = phone
            this.address = address
            this.password = password
        }
    }

    export const getClient = () => {
        return dbClient
    }

    export const dbClient = [
        new Client('1',"Guilherme","email@gmail.com","rua", '1234'),
    ]
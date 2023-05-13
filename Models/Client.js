export class Client{
    constructor(name, password, email, phone, adress)
    {
        this.name = name
        this.password = password
        this.email = email
        this.phone = phone
        this.adress = adress
    }


}

export const getAll = () => {
    return dbClient
} 

export const dbClient = [ new Client('Guilherme', '12345678', 'guilherme@gmail.com', '(11) 97160-3962', 'Rua Limoeiros, 12, Indaiatuba'),]


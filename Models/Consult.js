export class Consult{
    constructor(id, date){
        this.id = id
        this.date = date
    }
}

export const getConsult =() =>{
    return dbConsult
}

export const dbConsult = [new Consult('1', '08-08-2021'),]


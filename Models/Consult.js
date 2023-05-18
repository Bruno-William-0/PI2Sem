export class Consult {
    constructor(id, client, employer, date, obs) {
        this.id = id;
        this.client = client;
        this.employer = employer;
        this.date = date;
        this.obs = obs;
    }
}

//
export const update = (id, consult) => {
    const consultToUpdate = findByPk(id)
    if (!consultToUpdate) {
        return false
    }

    const index = dbConsult.indexOf(consultToUpdate)
    dbConsult[index] = consult
    return true
}

export const destroy = (id) => {
    const consult = findByPk(id)
    if (!consult) {
        return false
    }

    const index = dbConsult.indexOf(consult)
    dbConsult.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbConsult.find(consult => consult.id === id)
}

export const create = (consult) => {
    consult.id = dbConsult.length + 1
    dbConsult.push(consult)
}

export const findAll = () => {
    return dbConsult
}

export const dbConsult = [
    new Consult("Guilherme", "Maria", "2023-05-12", "Observações da consulta 1"),
]
//

// export const getConsult = () => {
//     return dbConsult;
// }

// export const dbConsult = [
//     new Consult("1", "Guilherme", "Maria", "2023-05-12", "Observações da consulta 1"),
// ];

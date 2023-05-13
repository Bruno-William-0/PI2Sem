export class Consult {
    constructor(id, client, employer, date, obs) {
        this.id = id
        this.client = client;
        this.employer = employer;
        this.date = date;
        this.obs = obs;
    }
}

export const getConsult = () => {
    return dbConsult;
}

export const dbConsult = [
    new Consult("1", "Guilherme", "Maria", "2023-05-12", "Observações da consulta 1"),
];

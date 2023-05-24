import { pool } from "./DB.js";

export class Employer {
    constructor(name, email, phone, adress, password,employerfunction) {
        this.name = name;
        this.email = email;
        this.phone= phone;
        this.adress = adress;
        this.password = password;
        this.employerfunction = employerfunction
    }
}

export const update = (id, employer) => {
    const employerToUpdate = findByPk(id)
    if(!employerToupdate) {
        return false
    }

    const index = dbEmployer.indexOf(employerToUpdate)
    dbEmployer[index] = employer
    return true
}

export const destroy = (id) => {
    const employer = findByPk(id)
    if(!employer) {
        return false
    }
    const index = dbEmployer.indexOf(employer)
    dbEmployer.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbEmployer.find(employer => employer.id ===id)
}

export const create = (employer) => {
    employer.id = dbEmployer.length + 1
    dbEmployer.push(employer)
}

export const getEmployer = () => {
    return dbEmployer;
}

export const dbEmployer = [
    new Employer("Maria", "maria@gmail.com", "98765432", "avenida", "veterinaria"),
];

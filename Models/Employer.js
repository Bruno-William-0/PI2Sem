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

export const getEmployer = () => {
    return dbEmployer;
}

export const dbEmployer = [
    new Employer("Maria", "maria@gmail.com", "98765432", "avenida", "veterinaria"),
];

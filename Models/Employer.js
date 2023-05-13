
export class Employer{
    constructor(name, birth, functionemployer, phone, email)
    {
        this.name = name
        this.birth = birth
        this.functionemployer = functionemployer
        this.phone = phone
        this.email = email
    }
} 

export const getEmployer = () => {
    return dbEmployer
}

export const dbEmployer = [new Employer('Guilherme', '08-08-2000', 'Tosador', '(11) 9994-0000', 'guilherme@gmail.com'),]
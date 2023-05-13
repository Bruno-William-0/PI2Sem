export class Pet{
    constructor(idowner, name, breed)
    {
        this.idowner = idowner
        this.name = name
        this.breed = breed
    }

    
}

export const getPets = () => {
    return dbPets
}

export const dbPets = [new Pet('11', 'Shinra', 'Auau'),]
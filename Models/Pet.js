export class Pet {
    constructor(name, speec, breed, age) {
        this.name = name;
        this.speec = speec
        this.breed = breed;
        this.age = age;
    }
}

export const update = (id, pet) => {
    const petToUpdate = findByPk(id)
    if(!petToUpdate){
        return false
    }

    const index = dbPet.indexOf(petToUpdate)
    dbPet[index] = pet
    return true
}

export const destroy = (id) => {
    const pet = findByPk(id)
    if (!pet){
        return false
    }

    const index = dbConsult.indexOf(consult)
    dbConsult.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbPet.find(pet => pet.id === id)
}

export const create = (consult) => {
    pet.id = dbPet.length + 1
    dbPet.push(pet)
}

export const getPets = () => {
    return dbPet;
}

export const dbPet = [
    new Pet("Rex", "Cachorro", "Vira-lata", 5)
];

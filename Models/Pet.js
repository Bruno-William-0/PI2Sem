export class Pet {
    constructor(id, name, speec, breed, age) {
        this.id = id
        this.name = name;
        this.speec = speec
        this.breed = breed;
        this.age = age;
    }
}

export const getPet = () => {
    return dbPet;
}

export const dbPet = [
    new Pet('1', "Rex", "Cachorro", "Vira-lata", 5),
];

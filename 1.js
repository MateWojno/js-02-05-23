function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.age = 21;
    obj.introduceSelf = function() {
        console.log(`Hi I'm ${this.name}, and I am ${this.age} years old.`);
    };
    return obj;
}

const salva = createPerson("Salva");
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.introduceSelf();

const agnes = createPerson("Agnes");
agnes.introduceSelf();
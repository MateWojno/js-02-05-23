// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.age = 21;
//     obj.introduceSelf = function() {
//         console.log(`Hi I'm ${this.name}, and I am ${this.age} years old.`);
//     };
//     return obj;
// }

// const salva = createPerson("Salva");
// salva.introduceSelf();

// const frankie = createPerson("Frankie");
// frankie.introduceSelf();

// const agnes = createPerson("Agnes");
// agnes.introduceSelf();

//==============//
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi I'm ${this.name}.`);
    };
}

const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();


//===============//
// const myNofitication = new Notification("Hello!");

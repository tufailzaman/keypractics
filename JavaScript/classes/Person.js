class Person {
    constructor (name){
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
let Person = new Person("Tufail Zaman");
console.log(Person.name);
Person.name = "Amjad Khan";
console.log(Person.name)
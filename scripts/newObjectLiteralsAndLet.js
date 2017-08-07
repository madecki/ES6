function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.sayHello = function () {
    return this.firstname + " " + this.lastname;
};

let person1 = new Person("Jan", "Kowala");
let person2 = new Person("Anna", "Kowalska");

let methods = {
    sayHello: function () {
        return (this.firstname + " " + this.lastname).toUpperCase();
    }
};

Object.setPrototypeOf(person1, methods);

console.log('newObjectLiterals', person1.sayHello());
console.log('newObjectLiterals', person2.sayHello());
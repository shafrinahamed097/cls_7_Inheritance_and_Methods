/*
  1. Classes are blueprint of an Object
  2. Class is a template while Objects are instances of the class
  3. Using let or var to declare variable inside a class in unnecessary class properties are automatically scoped to the instance and don't require explicit variable declarations


*/

// Declaring Class & Using Class

class Person {
  firstName = "Shafrin";
  lastName = "Ahamed";

  fullName() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }
};

let PersonName = new Person();
console.log(PersonName.fullName());




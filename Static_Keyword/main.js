/*

1. The 'static' keyword in JS is used to define static methods and properties for a class
2. Static members (properties and method) are called without instantiating their class and cannot be called through


*/

class Person {
    static firstName = 'Shafrin';
    lastName = 'Ahamed';

    getName() {
        return `Full Name: ${this.firstName} ${this.lastName}`;
    }
}

console.log(Person.firstName);


/*
 Why we use 'static'
 
 1. Shared Properties
 2. Utility Functions
 3. Memory Efficiency
 4. Performance


*/
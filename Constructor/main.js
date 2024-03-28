// Class constructor is magic method

// Class constructor

class Person {

    // 1. Auto Fire, 2. Can't Return 3.Params
    constructor(a, b) {
        console.log(a + b)

    }

    firstName = 'Shafrin';
    lastName = 'Ahamed';

    getName() {
        return `Name: ${this.firstName} ${this.lastName}`;
    }
}

let personObj = new Person(20, 30);


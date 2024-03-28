// Class constructor is magic method

// Class constructor

class Person {

    // 1. Auto Fire, 2. Can't Return 3.Params
    constructor() {
        console.log("I'm Deparametaries Constructor ")

    }

    firstName = 'Shafrin';
    lastName = 'Ahamed';

    getName() {
        return `Name: ${this.firstName} ${this.lastName}`;
    }
}

let personObj = new Person();


// Parameterized Constructor

class Person1 {
    constructor(a, b) {
        console.log(a + b);
    }
}

let person1Obj = new Person1(20, 30);


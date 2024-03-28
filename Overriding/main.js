/*

1. Overriding works for inheritance relationship.
2. When child class change his parent properties, that is overriding

*/

class Father {
    addNumber() {
        let a = 10;
        let b = 20;
        let c = 30;
        console.log(a + b + c);
    }
}

class Son extends Father {

    // Overriding
    addNumber() {
        let a = 10;
        let b = 20;

        console.log(a + b);
    }

}

let FatherObj = new Father();
let SonObj = new Son();

SonObj.addNumber();

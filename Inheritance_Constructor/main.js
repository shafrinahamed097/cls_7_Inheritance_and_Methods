// Constructor inside only Parent class

class Father {
    constructor() {
        console.log("I'm Father Constructor");

    }

}

class Son extends Father {

}

let SonObj = new Son();
let FatherObj = new Father();
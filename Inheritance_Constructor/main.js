// Constructor inside only Parent class

class Father {
    constructor(a, b) {
        console.log("I'm Father Constructor=" + (a + b));

    }

}

class Son extends Father {

}

let SonObj = new Son(20, 30);
let FatherObj = new Father(40, 30);
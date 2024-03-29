// Constructor inside only Parent class

class Father {
    constructor(a, b) {
        console.log("I'm Father Constructor=" + (a + b));

    }

}

class Son extends Father {

}

// let SonObj = new Son(20, 30);
// let FatherObj = new Father(40, 30);


// Constructor inside only Child Class

class Father1 {

}

class Son1 extends Father1 {
    constructor(a, b) {
        super();
        console.log("I'm Son Constructor = " + (a + b));
    }
}

// let SonObj1 = new Son1(20, 30);


// Constructor inside both parent & child class pass parameters


class Father2 {
    constructor(a, b) {
        console.log("I'm Father Constructor = " + (a + b));
    }
}

class Son2 extends Father2 {
    constructor(a, b) {
        super();
        console.log("I'm Son Constructor = " + (a + b));
    }

}

let SonObj2 = new Son2(30, 40);


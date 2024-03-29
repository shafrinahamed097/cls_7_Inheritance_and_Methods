/*
  1. When a class extends another
  2. It inheritance the parent class's static properties and methods

*/

class Parent {
    static msg() {
        console.log("Message from Parent")
    }

}

class child extends Parent {

}

child.msg();
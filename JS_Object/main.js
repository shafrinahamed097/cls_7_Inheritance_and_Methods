/*

An Object is a unique entry that contains properties like:

  * Variable type properties
  * Method Properties
  * Object Properties
  * Array Properties
  
  There are 3 ways to create Objects


*/

let person = {
    name: "Ostad",
    age: 24,
    city: 'Dhaka'
}

console.log(person);

// There are 3 ways to create Objects

// 1.By Object literal

let App = {
    Android: "https://download link for Anroid",
    IOS: "https://download link for IOS",
    Windows: "https://download link for windows",
    Linux: "https: //download link for linux"
}

// console.log(App);

// 2. By creating instance of Object

let App1 = new Object();

App1.Android = "https://download link for Android";
App1.IOS = "https://download link for IOS";
App1.Windows = "https://download link for windows";
App1.IOS = "https: //download link for linux";

console.log(App1);

// 3. By using an Object constructor




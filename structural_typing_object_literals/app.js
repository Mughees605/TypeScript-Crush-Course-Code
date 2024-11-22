"use strict";
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
ball = tube;
let myType = { name: "Moheed", id: 1 };
//Case 1
myType = { id: 2, name: "Tom" };
//Case 2b 
var x; //Note now 'x' can have any name, just that the property should be of type string
x = { id: 1, fullname: "Moheed" }; // Ok, `fullname` matched by index signature
console.log(`Fullname ${x}`);
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
let myType3 = { id: 2, name_person: "Tom" };
var x; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature
var myType4 = { id: 2, name: "Tom", age: 22 };
//Case 3
myType = myType4; //Case 3: Ok,  

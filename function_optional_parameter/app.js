"use strict";
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Moheed");
var result2 = buildName("Moheed", "Siddiqui");
console.log("First Name: ", result1);
console.log("Full Name: ", result2);
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
let result3 = buildName("Moheed");
var result4 = buildName("Moheed", "Siddiqui");
console.log("First Name: ", result3);
console.log("Full Name: ", result4);

"use strict";
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Siddiqui") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Moheed");
let result2 = buildName("Noman", "Waseem");
console.log(`Full Name: ${result1}`);
console.log(`Full Name: ${result2}`);
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
let buildName1 = function (firstName, lastName = "Siddiqui") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
let result3 = buildName("Mughees");
let result4 = buildName("Tahir", "Hashami");
console.log(`Full Name: ${result3}`);
console.log(`Full Name: ${result4}`);

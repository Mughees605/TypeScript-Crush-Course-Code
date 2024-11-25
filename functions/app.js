"use strict";
//Note: All parameters are required
//Named function
function add(x, y) {
    return x + y;
}
console.log("Add: ", add(1, 4));
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
console.log("My Add 1: ", myAdd1(1, 8));
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log("My Add 2: ", myAdd2(1, 10));
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
console.log("My Add 3: ", myAdd3(1, 3));
//Lambda functions															
let myAdd4 = (a, b) => a + b;
function greeter(fn) {
    //....
}

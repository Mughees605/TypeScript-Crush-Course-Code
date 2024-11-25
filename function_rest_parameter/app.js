"use strict";
function buildName(firstName, ...restOfName) {
    return firstName + "," + restOfName.join(",");
}
var employeeName = buildName("Moheed", "Shoaib", "Dawood", "Wahaj");
console.log(`Employee Names: ${employeeName}`);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + "," + restOfName.join(",");
};
var employeeName = buildNameFun("Noman", "Tahir", "Kashaf", "Rehman");
console.log(`Employee Names: ${employeeName}`);

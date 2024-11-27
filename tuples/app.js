"use strict";
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [1, "moheed"];
var secondElement = tuple[1];
console.log(secondElement);
const failingResponse = ["Not Found", 404];
const passingResponse = ["{}", 200];
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log("localInfo", localInfo);
}
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
function calculatePayForEmployee(id, ...args) {
    console.log(`Calculating pay for employee ID: ${id}`);
    return args.reduce((sum, pay) => sum + pay, 0);
}
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

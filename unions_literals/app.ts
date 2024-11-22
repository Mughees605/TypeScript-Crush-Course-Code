let myname: string | null;

myname = null;
console.log(myname);

myname = "moheed";
console.log(`My name is: ${myname}`);

let myAge: string | number;

myAge = 19;//narrowing
console.log(`My age is: ${myAge}`);

myAge = "Dont Know";//narrowing
console.log(`My age is: ${myAge}`);

console.log(`Age is string ${myAge.toString()}`);
console.log(`Age is lowercase ${myAge.toLowerCase()}`);

let newAge = Math.random() > 0.6 ? "Siddiqui": 60;

if (newAge === "Siddiqui") {
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number

console.log(`New Age is ${newAge}`)

let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK

console.log(`Age ${age}`)

let person: "moheed";

person = "moheed";

console.log(`Person ${person}`)

let yourName = Math.random() > 0.6 ? "Anwar": "Anwar Siddiqui";

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

yourName?.toUpperCase();//OK

console.log(`Your name ${yourName}`)

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

type Id = number | string;

type IdMaybe = Id | undefined | null;
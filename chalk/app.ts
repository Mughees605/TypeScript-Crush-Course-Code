import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.blue("Insha Allah, in " + (50 - answers.age) + " years you will be 50 years old."));
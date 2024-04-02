#! /usr/bin/env node
import inquirer from "inquirer";
// Welcome message
console.log("    WELCOME TO NUMBER GUSSING GAME    ");
console.log("    ______________________________    \n\n");
// Use pre-defined methods
const randomNumber = Math.floor(Math.random() * 6 + 1);
// Get user input
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess Any Number Between 1~6: ",
    },
]);
//Use condition
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations!You Guess Right Number.");
}
else {
    console.log("Sorry!You Guess Wrog Number.");
}
//End message
console.log("\n\n                 THE END");
console.log("                 _______");

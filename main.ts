#!/usr/bin/env node
import inquirer from "inquirer";

type ansType = {
    userGuess: number
};


const systemGeneratedNumber = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess the number (between 0 and 9):"
    }
]);

const { userGuess } = answers;

console.log(`Your guess: ${userGuess}`);
console.log(`Correct number: ${systemGeneratedNumber}`);


if (userGuess === systemGeneratedNumber) {
    console.log("Congratulations! Your guess is correct. You win!");
} else {
    console.log("Sorry, your guess is incorrect. Try again!");
}


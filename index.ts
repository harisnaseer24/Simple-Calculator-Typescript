#!  /usr/bin/env node 

// SHABANG--
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number =>", type: "number", name: "firstNum" },
  { message: "Enter second number =>", type: "number", name: "SecondNum" },
  {
    message: "Select operation you want to perform..?",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

switch (answer.operator) {
  case "Addition":
    console.log(answer.firstNum + answer.SecondNum);
    break;
  case "Subtraction":
    console.log(answer.firstNum - answer.SecondNum);
    break;
  case "Multiplication":
    console.log(answer.firstNum * answer.SecondNum);
    break;
  case "Division":
    console.log(answer.firstNum / answer.SecondNum);
    break;

  default:
    console.log("Please select valid operator");
    break;
}

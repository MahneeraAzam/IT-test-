// ## Calculator

// - make addition calculator with the help of inquirer and 2 numbers.


import inquirer from "inquirer";


const answer = await inquirer.prompt([{
    type: "number",
    name: "firstNumber",
    message: "Enter your firstsecond number",
    
},
{
    type: "number",
    name: "seconNumber",
    message: "Enter your second number",
    
}

])

if (answer.operators === "Addition"){
    console.log( + answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if  (answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if  (answer.operators === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
   else{
    console.log("Please select valid operator")
   }
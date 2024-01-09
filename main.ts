import inquirer from 'inquirer';
let answer= await inquirer.prompt([{
    type: 'number',
    name: 'num1',
    message: "Enter first number"
    
},
{
    type: 'number',
    name: 'num2',
    message: "Enter second number"
},
{
    type: 'list',
    name: 'operator',
    message: "Select operator",
    choices: ['addision','subtraction','multiplication','division']
}])
switch(answer.operator)
{
  case 'addision':
    console.log(answer.num1+answer.num2)
    break;
  case 'subtraction':
    console.log(answer.num1-answer.num2)
    break;
  case 'multiplication':
    console.log(answer.num1*answer.num2)
    break;
  case 'division':
    console.log(answer.num1/answer.num2)
    break;

    default:
    console.log("Invalid operator")
    break;
}
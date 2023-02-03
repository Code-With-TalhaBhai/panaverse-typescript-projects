#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";


async function startCalc(){        
    await inquirer.prompt([
    {
    type: 'list',
    name: 'operator',
    message: 'Which operation you want to perform?',
    choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
},
{
    type: 'number',
    name: 'num1',
    message: 'Enter number 1: ',
},
{
    type: 'number',
    name: 'num2',
    message: 'Enter number 2: ',
},
]).then(({operator,num1,num2}) => {
    if(operator == 'Addition') {
        console.log(`The ${operator.toLowerCase()} of ${num1} and ${num2} is: ${num1+num2}`);
    }
    else if(operator == 'Subtraction') {
        console.log(`The ${operator.toLowerCase()} of ${num1} and ${num2} is: ${num1-num2}`);
    }
    else if(operator == 'Multiplication') {
        console.log(`The ${operator.toLowerCase()} of ${num1} and ${num2} is: ${num1*num2}`);
    }
    else if(operator == 'Division') {
        console.log(`The ${operator.toLowerCase()} of ${num1} and ${num2} is: ${num1/num2}`);
}
}).catch((err) => {
    console.log(err);
});
}



async function startAgain(){
    do {
        await startCalc();
        var again = await 
        inquirer.prompt({
            type: 'confirm',
            name: 'restart',
            message: 'Would you like to Restart'
        })
    // } while (again.restart == "Y" || again.restart == "yes", again.restart == "y", again.restart == "YES");
    } while (again.restart == true);
}


startAgain();
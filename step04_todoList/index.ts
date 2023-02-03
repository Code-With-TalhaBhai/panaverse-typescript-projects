import chalk from "chalk"
import figlet from "figlet"
import inquirer from "inquirer";


console.log(chalk.blue(
    figlet.textSync('Todo-Cli',{
        horizontalLayout: "full",
        verticalLayout: "full"
    })
))

let todoArr : string[] = [];


async function main(){
    await inquirer.prompt({
        type: 'list',
        name: 'user_choice',
        message: 'What you want to do? ',
        choices: ['Add Todo','Show Todos']
    }).then(async({user_choice})=>{
        if(user_choice == 'Add Todo'){
            await inquirer.prompt({
                type: 'input',
                name: 'todo',
                message: 'Enter your todo: '
            }).then(({todo})=>{
                todoArr.push(todo);
                console.log(chalk.green('Add todo-succesfully'));
            })
        }
        else if(user_choice == 'Show Todos'){
            if(todoArr.length > 0){
                todoArr.map(data=>{
                    console.log(chalk.yellow(data));
                })
            }
            else{
                console.log(chalk.red('Your todo-list is empty. Please add some notes before'))
            }
        }
    }).catch(err=>console.log(err));
}

async function start(){
do {
    await main();
    var restart = await inquirer.prompt({
        type: 'confirm',
        name: 'todoAgain',
        message: 'You want to do do some more functionality or not? '
    });
} while (restart.todoAgain);
}


start();
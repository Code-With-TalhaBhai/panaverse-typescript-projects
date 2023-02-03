import chalk from "chalk"
import figlet from "figlet"
import inquirer from "inquirer";


console.log(chalk.blue(
    figlet.textSync('Currency-Converter',{
        horizontalLayout: "default",
    })
));


async function main(){
    let user_currency:string = '';
    let require_currency: string = '';
    let money:number = 0;
    let converted_currency:number = 0;
    let Arr : string[] =['PKR','USD','EURO'];
    await inquirer.prompt({
        name: 'in_currency',
        type: 'list',
        message: 'Enter your own currency',
        choices: Arr
    }).then(async(data)=>{
        user_currency = data.in_currency;
        let index = Arr.indexOf(user_currency);
        Arr.splice(index,1);
        await inquirer.prompt({
            name: 'out_currency',
            type: 'list',
            message: 'Enter the currency you want to convert in: ',
            choices: Arr
        }).then(async({out_currency})=>{
                require_currency = out_currency;
                console.log(require_currency);
                await inquirer.prompt({
                    name: 'amount',
                    type: 'number',
                    message: 'How much money you want to convert in? '
                }).then(({amount})=>{
                    money = amount;
                    let us = 272.82;
                    let eu = 297.27;
                    let eud = 1.09;

                    if(user_currency == 'PKR'){
                        if(require_currency == 'USD'){
                            converted_currency = amount/us;
                        }
                        if(require_currency == 'EURO'){
                            converted_currency = amount/eu;
                        }
                    }
                    else if(user_currency == 'USD'){
                        if(require_currency == 'PKR'){
                            converted_currency = amount * us;
                        }
                        if(require_currency == 'EURO'){
                            converted_currency = amount / eud;
                        }
                    }
                    else if(user_currency == 'EURO'){
                        if(require_currency == 'PKR'){
                            converted_currency = amount * eu;
                        }
                        if(require_currency == 'USD'){
                            converted_currency = amount / eud;
                        }
                    }
            })
        })
        console.log('Your money from ',chalk.yellow(`${money} ${user_currency}`),' to ', chalk.green(`${converted_currency.toFixed(2)} ${require_currency}`) );
    })
}



async function start(){
    do {
        await main();
        var restart = await inquirer.prompt({
            type: 'confirm',
            name: 'todoAgain',
            message: 'Do you want to continue or not? '
        });
    } while (restart.todoAgain);
}
    
    start();
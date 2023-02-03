import chalk from "chalk";
import figlet from 'figlet';
import inquirer from "inquirer";


console.log(
    chalk.green(figlet.textSync('ATM-Cli',{
    horizontalLayout: 'full'
}))
);


let balance:number = 5000;


async function credentials(){ 
    await inquirer.prompt([
    {
    type: 'input',
    name: 'username',
    message: 'Enter your username: ',
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your Password: '
    },
]);
}


async function transaction (){
    await inquirer.prompt({
        type: 'list',
        name: 'Acc_Type',
        message: 'Check your transaction type',
        choices: ['Add Balance','Check Balance','Withdraw Balance']
    }
).then(async ({Acc_Type})=>{
    if(Acc_Type == 'Add Balance'){
        await inquirer.prompt({
            type: 'list',
            name: 'A_balance',
            message: 'How much balance you want to add: ',
            choices: ['1000','3000','5000','10000','20000','Custom']
        }).then(async({A_balance})=>{
            if(A_balance == 'Custom'){
                await inquirer.prompt({
                    name: 'custom',
                    type: 'number',
                    message: 'Enter how much money you want to add: '
                }).then(({custom})=>{
                    balance += custom;
                })
            }
            else{
                balance += Number(A_balance);
            }
            console.log(chalk.green('Transaction Successful'));
        }).catch((err)=>console.log("Enter number not string ",err));
    }
    else if(Acc_Type == 'Withdraw Balance'){
        await inquirer.prompt({
            type: 'list',
            name: 'D_balance',
            message: 'How much money you want to withdraw: ',
            choices: ['1000','3000','5000','10000','20000','Custom']
        }).then(async({D_balance})=>{
            if(D_balance == 'Custom'){
                await inquirer.prompt({
                    name: 'custom',
                    type: 'number',
                    message: 'Enter how much money you want to take: '
                }).then(({custom})=>{
                    if(balancecheck(balance,custom)){
                        balance -= custom;
                        }
                })
            }
            else{
                if(balancecheck(balance,Number(D_balance))){
                balance -= Number(D_balance);
                }
            }
        }).catch((err)=>console.log("Enter number not string ",err));
    }
    console.log(chalk.blue(`Your current balance is Rs. ${balance}`));
}).catch(err=>console.log(err));
}


async function start(){
do {
    await transaction();
    var check = await inquirer.prompt({
        type: 'confirm',
        name: 'customer_willing',
        message: 'Would you like to do any transaction more: '
    });
} while (check.customer_willing == true);
}

await credentials();
start();


const balancecheck = (balance:number,withdraw:number)=>{
    if(balance > withdraw){
        console.log(chalk.green("Transaction successful! "));
        return true;
    }
    else{
        console.log(chalk.red("Transaction failed! Your account haven't enough money"));
        return false;
    }
}
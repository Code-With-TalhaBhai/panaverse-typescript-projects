import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
console.log(chalk.blue(figlet.textSync('Currency - Converter', {
    horizontalLayout: "default",
})));
// Advance upload para by nodejs
async function main() {
    let paragraph = '';
    let output_para = '';
    await inquirer.prompt({
        name: 'input_para',
        type: 'input',
        message: 'Paste or write your paragraph here'
    }).then(async ({ input_para }) => {
        paragraph = input_para;
        await inquirer.prompt({
            name: 'user_need',
            type: 'list',
            message: 'What you wanna do? ',
            choices: ['UpperCase Full Paragraph', 'LowerCase Full Parapraph', 'Remove Blank Spaces']
        }).then(async ({ user_need }) => {
            // output_para = paragraph;
            console.log(output_para);
            console.log(paragraph);
            console.log('The amount of charaters with space are ', chalk.red(paragraph.length));
            console.log('The amount of characters with space are ', chalk.green(paragraph.trim().length));
            // console.log('Total amount of words are: ',chalk.blue(paragraph.includes(' ')).length);
            if (user_need == 'UpperCase Full Paragraph') {
                output_para = paragraph.toUpperCase();
            }
            else if (user_need == 'LowerCase Full Parapraph') {
                output_para = paragraph.toLowerCase();
            }
            else if (user_need == 'Remove Blank Spaces') {
                output_para = paragraph.trim();
            }
            else {
                console.log('not working');
            }
        });
        console.log("Output Paragraph is: \n", output_para);
    });
}
async function start() {
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

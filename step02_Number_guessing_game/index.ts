#! usr/bin/env node

import chalk from 'chalk';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const min = await rl.question('Enter the minimum point of number: ').then(data=>{return Number(data)});
const max = await rl.question('Enter the maximum point of number: ').then(data=>{return Number(data)});
const guess = await rl.question('Enter your guess: ').then(data=>{return Number(data)});


rl.close();


const random = getRandomInt(min,max);
console.log(chalk.blue(`The correct answer is ${random}`));
if(random == guess){
    console.log(chalk.green('Your guess is right'));
}
else{
    console.log(chalk.red('Your guess is wrong'));
}

function getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
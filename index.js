import chalk from 'chalk';
import promptSync from 'prompt-sync';

const prompt = promptSync();
let numDezenas = prompt(chalk.blue("Digite o a quantidade dezenas da a serem escolhidas: "));
let intervalo = prompt(chalk.blue("Digite o maior numero da cartela: "));

let cartela = [];

for (let i = 0; i < intervalo; i++) {
    cartela[i] = i + 1;
}

cartela = fisherYatesShuffle(cartela);
cartela = separaCartela(cartela, numDezenas)
console.log(cartela)


function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
   return arr;
}

function separaCartela (array, numDezenas) {
    let novaArray = array.slice(0,numDezenas);
    novaArray.sort((a,b) => a - b)
    return novaArray;
}




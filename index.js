
let numDezenas = 6;
let intervalo = 60;

console.log(gerarCartela(numDezenas));


function gerarCartela (dezenas) {
    
    let numLot = new Array(dezenas);
    alimentaCartela(numLot);
    eliminaRepetidos(numLot);
    
    numLot.sort((a,b) => a - b);

    return numLot;
}

function nAleatorio (intervalo) {
    let num = Math.floor(Math.random() * intervalo + 1);
    return num;
}

function alimentaCartela (arr, dif = 0) {
    
    for (let i = 0; i < arr.length + dif; i++) {
        const element = nAleatorio(intervalo);
        arr[i] = element;
    }
}

function eliminaRepetidos(array) {
    novaArray = [...new Set(array)];
    
    if (novaArray.length < array.length){

        while (novaArray.length < array.length) {
            dif = array.length - novaArray.length;
            novaArray = alimentaCartela(novaArray,dif);
            novaArray = [...new Set(array)];
        }
    }
    return novaArray;
}


//Math.floor(Math.random() * intervalo + 1


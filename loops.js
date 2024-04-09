
const somaButton = document.getElementById('somaButton')
const imprimirButton = document.getElementById('imprimirButton')
const numeroButton = document.getElementById('numeroButton')


const displaySomando = document.getElementById('somando')



somaButton.addEventListener('click', somar);
imprimirButton.addEventListener('click', imprimir);
numeroButton.addEventListener('click', mostrar);


function somar(totalNumber) {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    displayUm.innerHTML = sum
    return sum
}

function printCharsFromString(text) {

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
        textReturn += text[i];
    }

    return textReturn
}

function onlyPaitNumbers(totalNumber) {

    for (let i = 1; i <= totalNumber; i++) {
        if (!(i % 2 === 0)) {
            continue;
        }
          {
            console.info(i);
        }

    }
}
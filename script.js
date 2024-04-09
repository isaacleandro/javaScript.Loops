
const countButton = document.getElementById('countButton')
const resetButton = document.getElementById('resetButton')

countButton.addEventListener('click', contar);
resetButton.addEventListener('click', reset);

async function contar() {
    let display = document.getElementById('display');
    display.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        display.innerHTML += i + '';
        await new Promise(r => setTimeout(r, 500));
    }
}
function reset() {
    let display = document.getElementById('display');
    display.innerHTML = '...';
}




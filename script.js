let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', '/'];


const out = document.getElementById('output');

function clearAll() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.textContent = 0;
}

document.getElementById('clear').onclick = clearAll();
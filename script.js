let input1 = document.querySelector('.input-place1');
let input2 = document.querySelector('.input-place2');
let button1 = document.querySelector('.plus');
let button2 = document.querySelector('.minus');
let button3 = document.querySelector('.multiply');
let button4 = document.querySelector('.divide');

button1.onclick = function (){
    alert(+input1.value + +input2.value);
    input1.value = '';
    input2.value = '';
}

button2.onclick = function (){
    alert(input1.value - input2.value);
}

button3.onclick = function (){
    alert(input1.value * input2.value);
}

button4.onclick = function (){
    alert(input1.value / input2.value);
}
const numbers  = document.querySelectorAll('.numbers')
const op = document.querySelectorAll('.op')
let output = document.querySelector('#output')
function nine(){
    output.innerHTML += numbers[2].value
}
function more(){
  output.innerHTML += op[3].value
}
function sum (){
    output.innerHTML = (eval(output.textContent))
}
function eht(){
  output.innerHTML += numbers[1].value
}
function seven(){
  output.innerHTML += numbers[0].value
}
function f(){
  output.innerHTML += numbers[3].value
}
function five(){
  output.innerHTML += numbers[4].value
}
function six(){
  output.innerHTML += numbers[5].value
}
function one(){
  output.innerHTML += numbers[6].value
}
function tw(){
  output.innerHTML += numbers[7].value
}
function th(){
  output.innerHTML += numbers[2].value
}
function zero(){
 let numberzero = document.querySelector('#numbers-zero')
  output.innerHTML += numberzero.value
}
function m(){
  output.innerHTML += op[2].value
}
function mult(){
  output.innerHTML += op[1].value
}
function point(){
  output.innerHTML += op[4].value
}
function division(){
  output.innerHTML += op[0].value
}
function ce(){
  output.innerHTML = null
}
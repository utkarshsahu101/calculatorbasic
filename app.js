// const numbers = document.querySelectorAll('.numberColor');
// console.log(numbers);
// for(let i=0; i<numbers.length; i++) {
//     // console.log(numbers[i].innerHTML);
// }

let result = document.getElementById('result')

let input = document.createElement("input")
input.type = 'text'
input.className = 'resultClass'
result.appendChild(input);

// functionality
const numbers = document.querySelectorAll(".numberColor")
numbers.forEach(number => {
    number.addEventListener('click', display);
});

function display(event) {
    const clickedValue = event.target.value;
    input.value = input.value + clickedValue;
}
document.getElementById("deleteButton").onclick = function() {
    input.value = "";
};
document.getElementById("backspaceButton").onclick = function() {
    let string=document.querySelector("input").value;
    input.value=string.substring(0,string.length-1);
}
document.getElementById("plusOperator").onclick = function(event) {
    input.value += "+";
}
document.getElementById("minusOperator").onclick = function(event) {
    input.value += "-";
}
document.getElementById("multiplyOperator").onclick = function(event) {
    input.value += "*";
}
document.getElementById("divideOperator").onclick = function(event) {
    input.value += "/";
}
document.getElementById("percentOperator").onclick = function(event) {
    input.value += "%";
}
document.getElementById("equalOperator").onclick = function() {
    input.value = eval(input.value)
    // if(input.value.includes("%")) {
    //     input.value.replace(/%/g, '/');
    // }
}
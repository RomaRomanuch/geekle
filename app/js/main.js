const list = document.querySelectorAll('.track__items');
const title = document.querySelectorAll('.track__title');
const career = list[0];
const pro = list[1];
const careerChange = title[0];
const proChange = title[1];

career.onmouseover = function(){
    careerChange.style.color = '#73F9BC'
}

career.onmouseout = function() {
    careerChange.style.color = 'white'
}

pro.onmouseover = function(){
    proChange.style.color = '#73F9BC'
}

pro.onmouseout = function() {
    proChange.style.color = 'white'
}

console.log(pro);


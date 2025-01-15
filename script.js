let decr=document.getElementById("decr");
let incr=document.getElementById("incr");
let n=document.getElementById("n");
let number=document.getElementById("number");

decr.addEventListener("click",function(){
    let currentValue = parseInt(n.textContent); 
    let decrementValue = parseInt(number.value) || 1;
    n.textContent = currentValue - decrementValue;
})

incr.addEventListener("click",function(){
    let currentValue = parseInt(n.textContent); 
    let incrementValue = parseInt(number.value) || 1;
    n.textContent = currentValue + incrementValue;
})

function reset(){
    n.textContent=0;
}
"use strict";

let counterValue = 0;
const btnIncrement = document.querySelector("[data-action='increment']");
const btnDecrement = document.querySelector("[data-action='decrement']");
const spanVal = document.getElementById("value");

btnDecrement.addEventListener("click", (event) => {
    counterValue--;
    spanVal.innerText = String(counterValue);    
    console.log(counterValue);
})

btnIncrement.addEventListener("click", (event) => {
    counterValue++;
    spanVal.innerText = String(counterValue);    
    console.log(counterValue);
})
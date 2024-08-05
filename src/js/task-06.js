"use strict";

const inputChars = document.getElementById("validation-input");
inputChars.classList.add("invalid");

inputChars.addEventListener("blur", (event) => {
    const txt = String(inputChars.value);
    const correctLength = inputChars.getAttribute("data-length");
    
    if(txt.length == correctLength){
        inputChars.classList.remove("invalid");
        inputChars.classList.add("valid");
    }
    else{
        inputChars.classList.remove("valid");
        inputChars.classList.add("invalid");
    }
})

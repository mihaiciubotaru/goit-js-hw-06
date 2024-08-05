"use strict";

const inputName = document.getElementById("name-input");
inputName.value="xxx";
const spanOutput = document.getElementById("name-output");
spanOutput.innerText = "Anonymous";

inputName.addEventListener("input", (event) => {
    const txt = inputName.value;
    spanOutput.innerText = txt == "" ? "Anonymous" : txt;  
})

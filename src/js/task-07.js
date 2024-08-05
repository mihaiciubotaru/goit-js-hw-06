"use strict";

const dimFontControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

dimFontControl.addEventListener("change", (event) => {
    spanText.style.fontSize = dimFontControl.value + "px";
})
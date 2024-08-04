"use strict";
const listCateg=document.getElementsByClassName("item");
console.log(`Number of categories : ${listCateg.length}\n\n`);
for(let categ of listCateg){
    let h2 = categ.getElementsByTagName("h2");
    console.log(`Category: ${h2[0].textContent}`);
    console.log(`Elements: ${categ.getElementsByTagName("li").length}\n\n`);
}

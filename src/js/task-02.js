const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listLi = [];
const ul = document.getElementById("ingredients");

for(let i = 0; i<ingredients.length; i++){
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent=ingredients[i];
  listLi.push(li);
}

for(let currentLi of listLi){ul.appendChild(currentLi)};



import {fruits} from "./script.js";

const list = document.getElementById("fruit-list")

if(list) {
    list.innerHTML = fruits.map(fruit => 
        `<div class="fruit-card">
            <img src="${fruit.image}" alt="${fruit.name}" width="150px" height="150px">
            <h3 class="fruitname">${fruit.name}</h3>
            <h4 class="fruitrarity ${fruit.rarity}">${fruit.rarity}</h4>
            <h4 class="fruitchance">${fruit.probability} in 100</h4>
           
         </div>`
    ).join("")
}



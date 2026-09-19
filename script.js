export const fruits = [
  // COMMON
  { name: "Banana", probability: 16, rarity: "Common", image: "https://up.yimg.com/ib/th/id/OIP.m8bFHuUT_8WenD8Xv9fHiQHaFv?pid=Api&rs=1&c=1&qlt=95&w=141&h=109" },
  { name: "Apple", probability: 16, rarity: "Common", image: "https://up.yimg.com/ib/th/id/OIP.XaHLJVKT9vVfjBZeGAIiYwHaHa?pid=Api&rs=1&c=1&qlt=95&w=118&h=118" },
  { name: "Orange", probability: 16, rarity: "Common", image: "https://tse2.mm.bing.net/th/id/OIP.RrhvHap-IUNObc5Njm1nAQHaE8?r=0&pid=Api&h=220&P=0" },
  { name: "Watermelon", probability: 16, rarity: "Common", image: "https://tse1.mm.bing.net/th/id/OIP.0KP20B5MiIg-Tv5GuweSVgHaHa?r=0&pid=Api&h=220&P=0" },

  // UNCOMMON
  { name: "Guava", probability: 15, rarity: "Uncommon", image: "https://tse3.mm.bing.net/th/id/OIP.eVLwIUWXnikjDqjJfocODQHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Papaya", probability: 15, rarity: "Uncommon", image: "https://tse1.mm.bing.net/th/id/OIP.VtGUhxM3NQ_pMJvAVy9GNgHaGD?r=0&pid=Api&h=220&P=0" },
  { name: "Pineapple", probability: 15, rarity: "Uncommon", image: "https://tse1.mm.bing.net/th/id/OIP.14Pqr_MmalFeuvussOfudQHaHa?r=0&pid=Api&h=220&P=0" },

  // RARE
  { name: "Mango", probability: 10, rarity: "Rare", image: "https://tse3.mm.bing.net/th/id/OIP.gtofHqz5AdnkQGQmZTP07QHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Grapes", probability: 10, rarity: "Rare", image: "https://tse2.mm.bing.net/th/id/OIP.5TCZVd6NM7i782RvFtkfhwHaE7?r=0&pid=Api&h=220&P=0" },
  { name: "Strawberry", probability: 10, rarity: "Rare", image: "https://tse2.mm.bing.net/th/id/OIP.TDnjugw2jWw68tyT9B6l9AHaHa?r=0&pid=Api&h=220&P=0" },

  // EPIC
  { name: "Dragon Fruit", probability: 8, rarity: "Epic", image: "https://tse1.mm.bing.net/th/id/OIP.CZkJ8eW2hH7bUadl2JYSUAHaEK?r=0&pid=Api&h=220&P=0" },
  { name: "Avocado", probability: 8, rarity: "Epic", image: "https://tse1.mm.bing.net/th/id/OIP.MROilhiCNqYvKmGiVCAY_AHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Lychee", probability: 8, rarity: "Epic", image: "https://tse4.mm.bing.net/th/id/OIP.XbnB7w1M7a0Fjq3xlOnFDgHaHb?r=0&pid=Api&h=220&P=0" },

  // LEGENDARY
  { name: "Durian", probability: 7, rarity: "Legendary", image: "https://tse3.mm.bing.net/th/id/OIP.FL0s1PYTKebYunHT6zqJzQHaE5?r=0&pid=Api&h=220&P=0" },
  { name: "Mangosteen", probability: 7, rarity: "Legendary", image: "https://tse2.mm.bing.net/th/id/OIP.a1-G1xgwnQT2hfWjPXcUWwHaE8?r=0&pid=Api&h=220&P=0" },

  // MYTHICAL
  { name: "Golden Apple", probability: 5, rarity: "Mythical", image: "https://tse4.mm.bing.net/th/id/OIP.f2V2SN8-tawpTwHtvAqmJwHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Rainbow Fruit", probability: 5, rarity: "Mythical", image: "Gemini_Generated_Image_fcfl5dfcfl5dfcfl.jpg" }
];

let inventory = []
let rarities = ["All","Common","Uncommon","Rare","Epic","Legendary","Mythical"]


const drc = document.getElementById("draws-left")
const drawbtn = document.getElementById("drawbtn")

if (drc && drawbtn) {
let drawCount = 10000;

drc.textContent = `Draws Left:${drawCount}`



// the logic for draw count
drawbtn.addEventListener("click", function() {
    drawCount -- 
    drc.textContent = `Draws Left:${drawCount}`
    if (drawCount === 0) {
        drawbtn.disabled = true
        
    }
})

}


// probability randomizer // guards the draw button
if(drawbtn) {


function getRandomFruit(fruits) {
    let random = Math.floor(Math.random() * 100)

    for (let objs of fruits) {
        random -= objs.probability

        if(random < 0) {
            return objs
        }
    }
}

// guards the filter element
const filters = document.getElementById('dp-filter');
if(filters) {
filters.innerHTML = rarities.map(fruit => `
    
    <option value="${fruit}" class="filter-opt ${fruit}">${fruit}</option>
        
    `).join(" ")
}


// display fruits from inventory array to the fruit-container class
function displayInventory() {
const showInventory = document.getElementById("fruit-container") ;
const filteredevent = inventory.filter(invs => invs.rarity === filters.value)

if (filters.value === "All") {
    showInventory.innerHTML = inventory.map(invs => `
         <div class="fruit-card">
            <img src="${invs.image}" alt="${invs.name}" width="150px" height="150px">
            <h3 class="fruitname">${invs.name}</h3>
            <h4 class="fruitrarity ${invs.rarity}">${invs.rarity}</h4>
            <h4 class="fruitchance">${invs.probability} in 100</h4>
        </div>`).join("")
}

else if 
(filteredevent.length === 0) {
    showInventory.innerHTML = `
        <h1> No Fruits Collected in this tier </h1>
    `
}


else {
    showInventory.innerHTML = filteredevent.map(invs => `
    <div class="fruit-card">
            <img src="${invs.image}" alt="${invs.name}" width="150px" height="150px">
            <h3 class="fruitname">${invs.name}</h3>
            <h4 class="fruitrarity ${invs.rarity}">${invs.rarity}</h4>
            <h4 class="fruitchance">${invs.probability} in 100</h4>
    </div>`).join("")
}

}

//for the filter element
filters.addEventListener("change",displayInventory)




const modal = document.getElementById('fruit-modal')
const continuebtn = document.getElementById('modal-continue')
function winner() {
    modal.style.display = "block"
}

function close() {
    modal.style.display = "none"
}

continuebtn.addEventListener("click", close)
//pushes fruits to inventory array
const results = document.getElementById("fruitimage")
function push(){
    let randoms = getRandomFruit(fruits)
    inventory.push(randoms)
    results.innerHTML = `
            <p id="plate" style="font-size:15px">You Got ${randoms.name}</p>
            <div class="fruit-card">
            <img src="${randoms.image}" alt="${randoms.name}" width="150px" height="150px">
            <h3 class="fruitname">${randoms.name}</h3>
            <h4 class="fruitrarity ${randoms.rarity}">${randoms.rarity}</h4>
            <h4 class="fruitchance">${randoms.probability} in 100</h4>
           
         </div>`
    displayInventory()
    if(randoms.rarity === "Mythical") {
        winner()
        
    }

    
}
// push drawn fruits to inventory every click
drawbtn.addEventListener("click", push)


}














export const fruits = [
  // COMMON
  { name: "Banana", probability: 20, rarity: "Common", image: "https://cdn-icons-png.flaticon.com/512/3137/3137044.png" },
  { name: "Apple", probability: 20, rarity: "Common", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png" },
  { name: "Orange", probability: 10, rarity: "Common", image: "https://cdn-icons-png.flaticon.com/512/1728/1728729.png" },
  { name: "Watermelon", probability: 10, rarity: "Common", image: "https://cdn-icons-png.flaticon.com/512/3137/3137075.png" },

  // UNCOMMON
  { name: "Guava", probability: 8, rarity: "Uncommon", image: "https://cdn-icons-png.flaticon.com/512/3137/3137050.png" },
  { name: "Papaya", probability: 8, rarity: "Uncommon", image: "https://cdn-icons-png.flaticon.com/512/3137/3137059.png" },
  { name: "Pineapple", probability: 8, rarity: "Uncommon", image: "https://cdn-icons-png.flaticon.com/512/3137/3137062.png" },

  // RARE
  { name: "Mango", probability: 5, rarity: "Rare", image: "https://cdn-icons-png.flaticon.com/512/3137/3137054.png" },
  { name: "Grapes", probability: 5, rarity: "Rare", image: "https://cdn-icons-png.flaticon.com/512/3137/3137049.png" },
  { name: "Strawberry", probability: 5, rarity: "Rare", image: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },

  // EPIC
  { name: "Dragon Fruit", probability: 4, rarity: "Epic", image: "https://cdn-icons-png.flaticon.com/512/3137/3137047.png" },
  { name: "Avocado", probability: 3, rarity: "Epic", image: "https://cdn-icons-png.flaticon.com/512/1541/1541402.png" },
  { name: "Lychee", probability: 2, rarity: "Epic", image: "https://cdn-icons-png.flaticon.com/512/3137/3137053.png" },

  // LEGENDARY
  { name: "Durian", probability: 2, rarity: "Legendary", image: "https://cdn-icons-png.flaticon.com/512/3137/3137048.png" },
  { name: "Mangosteen", probability: 1, rarity: "Legendary", image: "https://cdn-icons-png.flaticon.com/512/3137/3137055.png" },

  // MYTHICAL
  { name: "Golden Apple", probability: 1, rarity: "Mythical", image: "https://cdn-icons-png.flaticon.com/512/11550/11550130.png" },
  { name: "Rainbow Fruit", probability: 1, rarity: "Mythical", image: "https://cdn-icons-png.flaticon.com/512/11550/11550155.png" }
];

let inventory = []


const drc = document.getElementById("draws-left")
const drawbtn = document.getElementById("drawbtn")

if (drc && drawbtn) {
let drawCount = 10;

drc.textContent = `Draws Left:${drawCount}`




drawbtn.addEventListener("click", function() {
    drawCount -- 
    drc.textContent = `Draws Left:${drawCount}`
    if (drawCount === 0) {
        drawbtn.disabled = true
    }
})

}



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

function displayInventory() {
const showInventory = document.getElementById("fruit-container") 

showInventory.innerHTML = inventory.map(invs => `
    <div class="fruit-card">
            <img src="${invs.image}" alt="${invs.name}" width="150px" height="150px">
            <h3 class="fruitname">${invs.name}</h3>
            <h4 class="fruitrarity ${invs.rarity}">${invs.rarity}</h4>
            <h4 class="fruitchance">${invs.probability} in 100</h4>
    </div>`).join("")
}


const results = document.getElementById("fruitimage")

drawbtn.addEventListener("click", function(){
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
        alert("Congratulations!!!")
    }
    console.log(inventory)
    
})

    



}




    console.log(Array.isArray(inventory))
    console.log(inventory[0])


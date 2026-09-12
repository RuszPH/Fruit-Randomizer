export const fruits = [
  // COMMON
  { name: "Banana", probability: 20, rarity: "Common", image: "https://up.yimg.com/ib/th/id/OIP.m8bFHuUT_8WenD8Xv9fHiQHaFv?pid=Api&rs=1&c=1&qlt=95&w=141&h=109" },
  { name: "Apple", probability: 20, rarity: "Common", image: "https://up.yimg.com/ib/th/id/OIP.XaHLJVKT9vVfjBZeGAIiYwHaHa?pid=Api&rs=1&c=1&qlt=95&w=118&h=118" },
  { name: "Orange", probability: 10, rarity: "Common", image: "https://tse2.mm.bing.net/th/id/OIP.RrhvHap-IUNObc5Njm1nAQHaE8?r=0&pid=Api&h=220&P=0" },
  { name: "Watermelon", probability: 10, rarity: "Common", image: "https://tse1.mm.bing.net/th/id/OIP.0KP20B5MiIg-Tv5GuweSVgHaHa?r=0&pid=Api&h=220&P=0" },

  // UNCOMMON
  { name: "Guava", probability: 8, rarity: "Uncommon", image: "https://tse3.mm.bing.net/th/id/OIP.eVLwIUWXnikjDqjJfocODQHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Papaya", probability: 8, rarity: "Uncommon", image: "https://tse1.mm.bing.net/th/id/OIP.VtGUhxM3NQ_pMJvAVy9GNgHaGD?r=0&pid=Api&h=220&P=0" },
  { name: "Pineapple", probability: 8, rarity: "Uncommon", image: "https://tse1.mm.bing.net/th/id/OIP.14Pqr_MmalFeuvussOfudQHaHa?r=0&pid=Api&h=220&P=0" },

  // RARE
  { name: "Mango", probability: 5, rarity: "Rare", image: "https://tse3.mm.bing.net/th/id/OIP.gtofHqz5AdnkQGQmZTP07QHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Grapes", probability: 5, rarity: "Rare", image: "https://tse2.mm.bing.net/th/id/OIP.5TCZVd6NM7i782RvFtkfhwHaE7?r=0&pid=Api&h=220&P=0" },
  { name: "Strawberry", probability: 5, rarity: "Rare", image: "https://tse2.mm.bing.net/th/id/OIP.TDnjugw2jWw68tyT9B6l9AHaHa?r=0&pid=Api&h=220&P=0" },

  // EPIC
  { name: "Dragon Fruit", probability: 4, rarity: "Epic", image: "https://tse1.mm.bing.net/th/id/OIP.CZkJ8eW2hH7bUadl2JYSUAHaEK?r=0&pid=Api&h=220&P=0" },
  { name: "Avocado", probability: 3, rarity: "Epic", image: "https://tse1.mm.bing.net/th/id/OIP.MROilhiCNqYvKmGiVCAY_AHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Lychee", probability: 2, rarity: "Epic", image: "https://tse4.mm.bing.net/th/id/OIP.XbnB7w1M7a0Fjq3xlOnFDgHaHb?r=0&pid=Api&h=220&P=0" },

  // LEGENDARY
  { name: "Durian", probability: 2, rarity: "Legendary", image: "https://tse3.mm.bing.net/th/id/OIP.FL0s1PYTKebYunHT6zqJzQHaE5?r=0&pid=Api&h=220&P=0" },
  { name: "Mangosteen", probability: 1, rarity: "Legendary", image: "https://tse2.mm.bing.net/th/id/OIP.a1-G1xgwnQT2hfWjPXcUWwHaE8?r=0&pid=Api&h=220&P=0" },

  // MYTHICAL
  { name: "Golden Apple", probability: 1, rarity: "Mythical", image: "https://tse4.mm.bing.net/th/id/OIP.f2V2SN8-tawpTwHtvAqmJwHaHa?r=0&pid=Api&h=220&P=0" },
  { name: "Rainbow Fruit", probability: 1, rarity: "Mythical", image: "Gemini_Generated_Image_fcfl5dfcfl5dfcfl.jpg" }
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


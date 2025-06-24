/**
 * HOF
 * 
 * Map
 * forEach
 * Filter
 * Find
 * Some
 * Reduce
 * 
 */

let arrayOfFood = ["Rice", "Yam", "Beans", "Potato", "Egg", "Pounded Yam", "Jollof Rice", "Bread"]

let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]

let arrayOfNumber = [10,105,29,43,22,105,66,99,177]

let filterNo = arrayOfNumbers.filter(number => number ? number %2 == 0 : "")

console.log(filterNo)

// console.log(arrayOfFood)

let mapFood = arrayOfFood.map((food)=>{
    console.log(food)
    display.innerHTML += `
      <li style = "color: red; font-size: 22px;">${food}</li>
    `
    return food;
})

console.log(mapFood)

let number = arrayOfNumbers.map(num=> num*2)

console.log(number)

let forEachFood = arrayOfFood.forEach((item)=>{
    // console.log(item)
    return item;
})

console.log(forEachFood)

let filterArray = arrayOfNumber.filter((num)=>{
    return num === 105
})

console.log(filterArray)

const something = arrayOfNumbers.some((item)=> item > 7)
    console.log(something)

const sum = arrayOfNumbers.reduce((val, acc)=> acc + val, 45)
    console.log(sum)

let cart = [
    { name: "Laptop", price: 300000, quantity: 1, inStock: true },
    { name: "Mouse", price: 5000, quantity: 2, inStock: true },
    { name: "Keyboard", price: 10000, quantity: 1, inStock: false },
    { name: "Monitor", price: 80000, quantity: 1, inStock: true },
    { name: "USB Cable", price: 2000, quantity: 3, inStock: false },
];

const itemDescription = cart.map(item => {
    item.name, item.price
    console.log(`${item.name} : ${item.price}`)

    show.innerHTML += `<li style="font-size: 25px; list-style: none;">${item.name} : #${item.price}</li>`
});

cart.forEach(item => {
    const total = item.price * item.quantity;
    console.log(`${item.name} total price: $ ${total}`)
})

const inStockItems = cart.filter(item => item.inStock);
console.log("In-stock items:" ,inStockItems)

const highestItems = cart.find(item => item.quantity > 2);
console.log("Most available item: " , highestItems)

const outOfStock =cart.some(item => item.inStock);
console.log("Any out of stock: " , outOfStock)

const totalValue = cart.reduce((acc, item) =>{
    return acc + (item.price * item.quantity);
}, 0)
console.log("Total cart value: $ " + totalValue)
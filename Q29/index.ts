// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement,such as You really like bananas!

let favoriteFruits = ["Mango", "Orange", "Banana"]

let findFruit = "Banana"

for (let i=0; i<favoriteFruits.length; i++) {
    if(favoriteFruits[i] == findFruit){
        console.log(`You really like ${findFruit}s `);
    }    
}

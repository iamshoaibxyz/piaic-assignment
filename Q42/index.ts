// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let megicians:string[]= ["Shahrukh Zahoor", "Anus", "Hamza", "Umar"]

function previousMagician(){
    for (let i=0; i<megicians.length; i++) {
        console.log(megicians[i]);        
    } 
}
function makeGreat(){
    let showMagician:string[] = []
    for (let magician of megicians) {
        showMagician.push(`The Great ${magician}`)
    }
    return showMagician
}
console.log("Orignal list with out modified")
previousMagician()

console.log(`After mofifing and adding "The Great"`)
console.log(makeGreat())


export{}
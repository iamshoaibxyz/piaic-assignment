// 35. Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

let pets = ["Dog", "Cat", "Rabbit"]

for (let i=0; i<pets.length; i++) {
    if(pets[i]=="Dog"){
        console.log(`=> ${pets[i]} is known to be faithful and loyal companions, protective of their masters and territory.`);
    }
    else if(pets[i]=="Cat"){
        console.log(`=> ${pets[i]} independent personality, grace, cleanliness, and subtle displays of affection have wide appeal.`);
    }
    else if(pets[i]=="Rabbit"){
        console.log(`=> ${pets[i]} is small, furry mammals with long ears, short fluffy tails, and strong, large hind legs.`);
    }
}

console.log(`They are heterotrophic, they cannot produce their own food. They are food-dependent on other organisms. They have no cell walls. They are motile means they can move from one place to another.`);

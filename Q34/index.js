/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more linesabout the kinds of pizza you like and then an additional sentence, such as
I really love pizza! */
var favoritePizza = ["Margherita Pizza", "Sicilian Pizza", "Greek Pizza"];
for (var i = 0; i < favoritePizza.length; i++) {
    console.log("I like ".concat(favoritePizza[i]));
}
console.log("honestly i hardly eat pizza, because it is not our triditional food, mostly people eat sometime like in party or whenever you visit far away");

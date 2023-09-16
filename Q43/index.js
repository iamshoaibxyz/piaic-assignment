"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
// a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array.Call show_magicians() with each array to show that you 
// have one array of the originalnames and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
var megicians = ["Shahrukh Zahoor", "Anus", "Hamza", "Umar"];
function makeGreat(inputMagician) {
    var showMagician = [];
    for (var _i = 0, inputMagician_1 = inputMagician; _i < inputMagician_1.length; _i++) {
        var magician = inputMagician_1[_i];
        showMagician.push("The Great ".concat(magician));
    }
    return showMagician;
}
function show_magicians() {
    console.log(megicians);
    console.log(makeGreat(megicians));
}
show_magicians();

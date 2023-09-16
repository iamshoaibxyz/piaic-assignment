"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
var megicians = ["Shahrukh Zahoor", "Anus", "Hamza", "Umar"];
function previousMagician() {
    for (var i = 0; i < megicians.length; i++) {
        console.log(megicians[i]);
    }
}
function makeGreat() {
    var showMagician = [];
    for (var _i = 0, megicians_1 = megicians; _i < megicians_1.length; _i++) {
        var magician = megicians_1[_i];
        showMagician.push("The Great ".concat(magician));
    }
    return showMagician;
}
console.log("Orignal list with out modified");
previousMagician();
console.log("After mofifing and adding \"The Great\"");
console.log(makeGreat());

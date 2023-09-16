"use strict";
// 45. Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function carDetail(modal, manufacturer) {
    var moreData = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreData[_i - 2] = arguments[_i];
    }
    var obj = {
        carModal: modal,
        manufacturer: manufacturer,
    };
    for (var i = 0; i < moreData.length; i += 2) {
        obj[moreData[i]] = moreData[i + 1];
    }
    return obj;
}
var result = carDetail("Honda cc", "Honda Pvt", "color", "Black", "country", "Pakistan");
console.log(result);

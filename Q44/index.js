// 44. Sandwiches: Write a function that accepts a array of items a person wantson a 
// sandwich. The function should have one parameter that collects as many items as the 
// function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "Your ".concat(item.join(", "), " has ordered");
}
var result = sandwich("Egg Sandwich", "Patato Sandwich");
console.log(result);

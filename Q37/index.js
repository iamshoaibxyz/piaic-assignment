// 37. Large Shirts: Modify the make_shirt() function so that shirts are largeby default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
// the default message, and a shirt of any size with a different message.
function makeShirts(size) {
    if (size === void 0) { size = "Large"; }
    console.log("Your order have recived to making a ".concat(size, " shirt "));
}
makeShirts();
makeShirts("Medium");

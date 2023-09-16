// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let vahicleName = "Honda cc"
let priceVahicle = 3300000
let vahicleColor = "Black"
let vahiclesIdentity = "ABC123"

console.log(vahicleName == "Aeroplan" || vahicleColor == "Black")
console.log(vahicleColor == "White" || vahicleName == "Audi")    

console.log(priceVahicle == 2200000 && vahiclesIdentity == "ABC123")  
console.log(vahiclesIdentity == "ABC123" && priceVahicle == 3300000)

console.log(vahiclesIdentity == "123ABC" || vahicleName == "Car")
console.log(vahicleName == "Honda cc" && vahiclesIdentity == "ABC123")   

console.log(vahiclesIdentity == "123ABC" || vahicleName == "Honda cc")
console.log(vahicleColor == "Brown" && vahiclesIdentity == "123xyz")    

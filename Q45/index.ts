// 45. Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
   
function carDetail(modal:string, manufacturer:string, ...moreData:string[]) {
    let obj = {
        carModal: modal, 
        manufacturer: manufacturer, 
    }    
    for (let i=0; i<moreData.length; i+=2) {
        obj[moreData[i]] = moreData[i+1]
    }
    return obj
}
let result = carDetail("Honda cc", "Honda Pvt", "color", "Black", "country", "Pakistan")
console.log(result);   

export {}

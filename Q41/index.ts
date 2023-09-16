// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician:string[]= ["Shahrukh Zahoor", "Anus", "Hamza", "Umar"]

function showMagicians(){
    for (let i=0; i<magician.length; i++) {
        console.log(magician[i]);        
    } 
}
showMagicians()


export{}

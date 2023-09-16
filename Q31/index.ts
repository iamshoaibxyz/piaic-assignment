// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
 
let userList = ["Bilal", "Habib"]

for (let i=0; i<userList.length+1; i++) {
    if(typeof userList[i] === "string"){
        console.log(userList[i])
    }else {
        console.log("We need to find some user!");
    }
}


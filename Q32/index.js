// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
// will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var currentUsers = ["Anus", "Hamza", "Bilal", "Hasseb", "Usman", "Ali"];
var newUsers = ["Shoaib", "Hamza", "Hasnen", "Ali", "Usama", "Abdullah"];
var _loop_1 = function (i) {
    var filterName = currentUsers.filter(function (value) { return value == newUsers[i]; });
    if (typeof filterName[0] == "string") {
        console.log("".concat(filterName[0], "  username has already been used. Please enter different name"));
    }
};
for (var i = 0; i < newUsers.length; i++) {
    _loop_1(i);
}
// here we can also use .find (replaced filter) method, here it is not supporting bcz i'm using tsc old version,
// for (let i=0; i<newUsers.length; i++) {
//     let filterName = currentUsers.find((value)=> value==newUsers[i])  
//     if(typeof filterName== "string"){
//         console.log(`${filterName}  username has already been used`);
//     }
// }

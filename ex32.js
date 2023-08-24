"use strict";
/*Ex 32
    Checking Usernames: Do the following to create a program that simulates how websites ensure
    that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
  also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username. If a username has not been used,
  print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Checking Usernames
// Part 1: Make a list of current users
var current_users = ['Khizer', 'JOHN', 'shabir', 'Furqan', 'Uhod'];
// Part 2: Make a list of new users
var new_users = ['Zahid', 'JOHN', 'Kamil', 'Noor', 'Furqan'];
var currentUsers = current_users.map(function (user) { return user.toLowerCase(); });
var newUsers = new_users.map(function (user) { return user.toLowerCase(); });
console.log(currentUsers);
console.log(newUsers);
//implicite array
var finalListUseravailable = [];
// checking current Users to new user and adding in new array;
for (var _i = 0, currentUsers_1 = currentUsers; _i < currentUsers_1.length; _i++) {
    var user = currentUsers_1[_i];
    if (!currentUsers.includes(user)) {
        finalListUseravailable.push(user);
    }
}
for (var _a = 0, newUsers_1 = newUsers; _a < newUsers_1.length; _a++) {
    var user = newUsers_1[_a];
    if (!currentUsers.includes(user)) {
        finalListUseravailable.push(user);
    }
}
for (var _b = 0, newUsers_2 = newUsers; _b < newUsers_2.length; _b++) {
    var user = newUsers_2[_b];
    if (finalListUseravailable.includes(user)) {
        console.log("The username is available : ".concat(user));
    }
    else {
        console.log("The username is not available : ".concat(user));
    }
}
// Part 3: Loop through new users and check availability
// const array1: string[] = ["apple", "banana", "orange", "mango", "kiwi"];
// const array2: string[] = ["orange", "grape", "kiwi", "pear", "melon"];
// const notCommonElements: string[] = [];
// for (const element of array1) {
//     if (!array2.includes(element)) {
//         notCommonElements.push(element);
//     }
// }
// for (const element of array2) {
//     if (!array1.includes(element)) {
//         notCommonElements.push(element);
//     }
// }
// console.log("Elements not common between arrays:", notCommonElements);
// for (const element1 of array1) {
//     if (!(array2.includes(element1))){
//         console.log(`${element1} available`)
//     }
//     else {
//         console.log(`${element1} not available`)
//     }
// }

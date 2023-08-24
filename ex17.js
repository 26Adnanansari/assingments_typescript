"use strict";
/*ex17
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Part A
    • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Part B
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
Part C
• Print a message to each of the two people still on your list, letting them know they’re still invited.
Part D
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
// Part A
var ex16_1 = require("./ex16");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex16_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex16_1.friendNames; } });
console.log("\n\nEx 17 : Start Here \n");
console.log("The table for big dinner will not arriving that why I apologise for dinner big party\nHere I have space of 2 guest.");
// Part B
console.log(ex16_1.friendNames);
for (var i = 0; i < (ex16_1.friendNames.length); i++) {
    console.log("We are sorry ".concat(ex16_1.friendNames.pop(), ",that you would not be attend the party."));
}
console.log(ex16_1.friendNames);
//Part C
var a = ex16_1.friendNames.length;
console.log(ex16_1.friendNames.length);
for (var i = 0; i < a; i++) {
    console.log("Who they are still invited for party : ".concat(ex16_1.friendNames[0]));
    //Part D
    ex16_1.friendNames.shift();
}
console.log("Guest List : ".concat(ex16_1.friendNames));

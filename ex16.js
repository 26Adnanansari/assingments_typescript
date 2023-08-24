"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
// Part A
var ex15_1 = require("./ex15");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex15_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex15_1.friendNames; } });
console.log("\n\nEx 16 : Start Here \n");
console.log("Some Updates about Party : Now we are arranging a big party.");
// Part B
ex15_1.friendNames.unshift("Akbar");
ex15_1.allGuest.unshift("Akbar");
//Part C
ex15_1.friendNames.splice(1, ((ex15_1.friendNames.length) / 2) + 1, "Aziz");
ex15_1.allGuest.splice(1, 0, "Aziz");
console.log(ex15_1.friendNames);
//Part D
function append(friendNames, index, value) {
    friendNames.splice(index, 0, value);
}
append(ex15_1.friendNames, (ex15_1.friendNames.length), "Burhan");
append(ex15_1.allGuest, 0, "Burhan");
console.log(ex15_1.friendNames);
//Part E
ex15_1.friendNames.forEach(function (value) {
    console.log("\"Join me for a delightful dinner, ".concat(value, " ! Let's create unforgettable memories together.\""));
});

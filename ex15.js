"use strict";
/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
var ex14_1 = require("./ex14");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex14_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex14_1.friendNames; } });
console.log("Ex 15 : Start Here \n");
// friendNames.map((friendNames) =>{
// console.log(`"Join me for a delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
// })
// Part A
var whoNot = ex14_1.friendNames.pop();
console.log("\n\"Sorry to hear you can't make it, ".concat(whoNot, ". We'll miss your presence at the dinner party.\"\n"));
console.log(ex14_1.friendNames);
//Part B
//adding new name Kamran on the place of zeeshan
ex14_1.friendNames.push("Zamaan");
console.log(ex14_1.friendNames);
//Part C
ex14_1.friendNames.map(function (friendNames) {
    console.log("\"New invitation, A delightful dinner, ".concat(friendNames, " ! Let's create unforgettable memories together.\""));
});
ex14_1.allGuest.push("Zamaan");

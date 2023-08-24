"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Ex 19
    Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
var ex17_1 = require("./ex17");
console.log("\n\n");
console.log("Ex 19 : Start Here \n");
ex17_1.allGuest.forEach(function (value) { return (console.log("Mr. ".concat(value, " , Invitation for Party, make dinner with 14,August, at 10:00pm "))); });

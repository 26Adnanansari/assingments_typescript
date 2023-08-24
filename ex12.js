"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
var friendNames = ["Kamran", "Farhan", "Adnan", "Salman", "Zeeshan"];
friendNames.map(function (friendNames) {
    console.log("\"Hey ".concat(friendNames, "! Sending you warm wishes and a big smile "));
});

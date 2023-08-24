"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 28: Stages of Life
var age = 25; // Set the age value here
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Exercise 29: No Users
var users = []; // Replace this with your user array
if (users.length === 0) {
    console.log("We need to find some users!");
    users.length = 0; // Clear the user array
    console.log("All usernames have been removed.");
}

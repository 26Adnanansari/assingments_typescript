/* Ex29
    Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
    if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// Define an array of favorite fruits
var favorite_fruits = ["banana", "strawberry", "mango"];
// Check for certain fruits using independent if statements
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
else {
    console.log("Not find");
}
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
else {
    console.log("Not find");
}
if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberries!");
}
else {
    console.log("Not find");
}
if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
}
else {
    console.log("Not find");
}
if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("You really like mangoes!");
}

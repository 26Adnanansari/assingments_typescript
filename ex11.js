/*ex11
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
var friendNames = ["Kamran", "Farhan", "Adnan", "Salman", "Zeeshan"];
console.log(friendNames);
friendNames.map(function (friendNames) {
    console.log("By .map() ".concat(friendNames));
});
friendNames.forEach(function (friendNames) {
    console.log("By .forEach() ".concat(friendNames));
});

/*
Think of something you could store in a array. For example, you could make a list of
mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/
var citiesInPakistan = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",
    "Quetta"
];
console.log("Major Cities in Pakistan:");
//Here we are printing by two method:
citiesInPakistan.forEach(function (a) { return console.log("Major city by forEach() function: ", a); });
citiesInPakistan.map(function (a) { return console.log("Major city by map() function : ", a); });

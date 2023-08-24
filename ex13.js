/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var favmotor = ["HONDA 125", "YAMAHA 100", "BMW MOTORRAD", "UNIQUE 150"];
favmotor.map(function (favmotor) {
    console.log("\u201CI would like to own a ".concat(favmotor, " motorcycle.\u201D"));
});

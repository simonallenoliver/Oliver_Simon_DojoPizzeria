function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozz", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozz, feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("hand tossed", "barBq", ["cheddar"], ["chicken", "onions"]);
console.log(p3);

var p4 = pizzaOven("thin", "marinara", "mozz", ["tomatoes", "spinach", "mushrooms"]);
console.log(p4);
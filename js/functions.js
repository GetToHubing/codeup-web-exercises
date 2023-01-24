"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(yourName) {
var output = "howdy doo " + yourName;
    return output;
}

console.log(sayHello("David"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("David");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "David";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result every time you refresh the page if you are using the random
 * number)
 */

function isTwo(number) {
    return number === 2;
}

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tip_percentage, bill) {
    return tip_percentage * bill;
}

console.log(calculateTip(0.25, 25.50));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
//------------------------------------------------------------------------------------------------------------------------------------------------
// var randomV2 = Math.floor((Math.random() * 70) + 1)
// var tipPercent = prompt("Your total was " + randomV2 + ", what percent would you like to tip?");
// var tipAmount = calculateTip(tipPercent, randomV2);
// alert("Your tip amount is $" + tipAmount / 100);
//--------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(price, discount) {
//     var discountAmount = price * discount;
//     return price - discountAmount;
// }

var price = 12;
var discount = .2;
//the above variables don't effect the below function even though they are global variables. because it's 'self contained'.
(function applyDiscount(price, discount) {
    var discountAmount = price * discount;
    console.log(price - discountAmount);
})(45.99, 0.2);
//printing the functions returned value 
console.log((function applyDiscount(price, discount) {
    var discountAmount = price * discount;
    return price - discountAmount;
})(45.99, 0.12));
//turning the function returned value into a reusable variable 
var x = (function applyDiscount(price, discount) {
    var discountAmount = price * discount;
    return price - discountAmount;
})(45.99, 0.12);
console.log(x);
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

console.log((function analyzeColor(color) {
    if(color === "red") {
        return "There are many variations of roses that are red. Do you like red?";
    } else if(color === "orange") {
        return "Have you ever had a mandarin? They are a nice orange and taste amazing!";
    } else if(color == "yellow") {
        return "I don't care for the color yellow. Bye now.";
    } else if(color === "blue") {
        return "Blue is the color of the sea and is a calming color.";
    } else if(color === "indigo") {
        return "I don't really know much about indigo but i have been told that it is more blue than it is purple.";
    } else if(color === "purple") {
        return "Purple is my favorite color, it's just nice to look at.";
    } else {
        return "I don't know anything about " + color + ", sorry.";
    }
})("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log((function analyzeColor(color) {
    if(color === "red") {
        return "There are many variations of roses that are red. Do you like red?";
    } else if(color === "orange") {
        return "Have you ever had a mandarin? They are a nice orange and taste amazing!";
    } else if(color == "yellow") {
        return "I don't care for the color yellow. Bye now.";
    } else if(color === "blue") {
        return "Blue is the color of the sea and is a calming color.";
    } else if(color === "indigo") {
        return "I don't really know much about indigo but i have been told that it is more blue than it is purple.";
    } else if(color === "purple") {
        return "Purple is my favorite color, it's just nice to look at.";
    } else {
        return "I don't know anything about " + color + ", sorry.";
    }
})(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

(function analyzeColor(color) {
    switch(color) { 
    case "red" : console.log("There are many variations of roses that are red. Do you like red?");
    break;
    case "orange" : console.log("Have you ever had a mandarin? They are a nice orange and taste amazing!");
    break;
    case "yellow" : console.log("I don't care for the color yellow. Bye now.");
    break;
    case "blue" : console.log("Blue is the color of the sea and is a calming color.");
    break;
    case "indigo" : console.log("I don't really know much about indigo but i have been told that it is more blue than it is purple.");
    break;
    case "purple" : console.log("Purple is my favorite color, it's just nice to look at.");
    break;
    default : console.log("I don't know anything about " + color + ", sorry.");
    }}
)(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Pick a color any color!...from the following selection: red, orange, yellow, green, blue, indigo, violet.");

(function analyzeColor(color) {
    switch(color) { 
    case "red" : alert("There are many variations of roses that are red. Do you like red?");
    break;
    case "orange" : alert("Have you ever had a mandarin? They are a nice orange and taste amazing!");
    break;
    case "yellow" : alert("I don't care for the color yellow. Bye now.");
    break;
    case "blue" : alert("Blue is the color of the sea and is a calming color.");
    break;
    case "indigo" : alert("I don't really know much about indigo but i have been told that it is more blue than it is purple.");
    break;
    case "purple" : alert("Purple is my favorite color, it's just nice to look at.");
    break;
    default : alert("I don't know anything about " + color + ", sorry.");
    }}
)(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

(function calculateTotal(luckyNumber, cost) {
    if(luckyNumber === 5) {
        console.log("Winner winner chicken dinner, you got the lucky number 5 so your total comes out to be $0!");
    } else if (luckyNumber === 4) {
        var total = cost - (cost * 50 / 100);
        console.log("You got the lucky number 4, so you get half off your purchase! Your total comes out to " + total + ".");
    } else if(luckyNumber === 3) {
        var total = cost - (cost * 35 / 100);
        console.log("You got the lucky number 3, so you get 35% off your purchase! Your total comes out to " + total + ".");
    } else if(luckyNumber === 2) {
        var total = cost - (cost * 25 / 100);
        console.log("You got the slightly lucky number 2, so you get 25% off your purchase! Your purchase comes out to " + total + ".");
    } else if(luckyNumber === 1) {
        var total = cost - (cost * 10 / 100);
        console.log("You didn't get a very lucky number but you still get a 10% off your purchase! Your purchase comes out to be " + total + ".");  
    } else {
        console.log("Oh so sorry you got the one unlucky number 0, you get no discount. Your total is " + cost  + ".");
    }
})(1, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let cost = prompt("What is you bills total?");

(function calculateTotal(luckyNumber, cost) {
    if(luckyNumber === 5) {
        alert("Winner winner chicken dinner, you got the lucky number 5!! Your original cost was $" + cost + " but now your total comes out to be $0!");
    } else if (luckyNumber === 4) {
        var total = cost - (cost * 50 / 100);
        alert("You got the lucky number 4, so you get half off your purchase! Your original cost was $" + cost + " but now your total comes out to $" + total + ".");
    } else if(luckyNumber === 3) {
        var total = cost - (cost * 35 / 100);
        alert("You got the lucky number 3, so you get 35% off your purchase! Your original cost was $" + cost + " but now your total comes out to $" + total + ".");
    } else if(luckyNumber === 2) {
        var total = cost - (cost * 25 / 100);
        alert("You got the slightly lucky number 2, so you get 25% off your purchase! Your original cost was $" + cost + " but now your purchase comes out to $" + total + ".");
    } else if(luckyNumber === 1) {
        var total = cost - (cost * 10 / 100);
        alert("You didn't get a very lucky number (1) but you still get 10% off your purchase! Your original cost was $" + cost + " but now your purchase comes out to be $" + total + ".");  
    } else {
        alert("Oh, so sorry, you got the one unlucky number 0, you get no discount. Your total is $" + cost  + ".");
    }
})(luckyNumber, cost);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let confirmation = confirm("Would you like to enter a number?");

if(confirmation) {
    let promptNum = parseInt(prompt("Please type in a number."));
    console.log(isNaN(NaN));
    if(isNaN(promptNum) != true) { //
        let plusHundred = promptNum + 100;
        if(promptNum % 2 === 0 && promptNum < 0) {
            alert("The number you typed is even and negative and if you added 100 to it the new number would be " + plusHundred + ".");
        } else if(promptNum % 2 !== 0 && promptNum < 0) {
            alert("The number you typed is odd and is also negative and if you added 100 to it the new number would be " + plusHundred + ".");
        } else if(promptNum % 2 === 0 && promptNum > 0) {
            alert("The number you typed is even and also positive. If you added 100 to it the new number would be " + plusHundred + ".");
        } else {
            alert("The number you typed is even and also negative. If you added 100 to it the new number would be " + plusHundred + ".");
        }
    } else {
        alert("Whatever you just typed was not a number, please re-evaluate your life and try again later.")
    };
};





"use strict";
let oddNumber = parseInt(prompt("Please type an odd number between 1 and 50."));

while(typeof oddNumber != "number" || oddNumber % 2 == 0 || oddNumber < 1 || oddNumber > 50 || isNaN(oddNumber) == true) {
    oddNumber = parseInt(prompt("Please type an odd number between 1 and 50."));
    while(typeof oddNumber == "number" && oddNumber % 2 != 0 && oddNumber > 1 && oddNumber < 50 && isNaN(oddNumber) == false) {
        break;
    }
    
}

(function whileOddNumber(x) {
    console.log("Number to skip is: " + x);
    let i = 0;
    while(i < 50) {
        if(i % 2 != 0) {
            if(i === x) {
                console.log("Yikes! Skipping number: " + i);
                i++;
                continue;
            }
            console.log("Here is an odd number: " + i);
        }
        i++;
    }
})(oddNumber);



"use strict";
(function () {
    let i = 2;
while(i <= 65536) {
    console.log(i);
    i *= 2;
}
})();

let randomNum = Math.floor(Math.random() * 50) + 50; //how many cones to be sold for the day
let client = 1;

do {
    let i = Math.floor(Math.random() * 5) + 1; // how many cones sold to the client
     if(randomNum >= i) {
        console.log("client #" + client + " bought " + i + " cones.");
    } else {
        console.log("Cannot sell you " + i + " cones, I only have " + randomNum + "...");
        continue; //not sure why this is required
    }  
    client++; //note: where you put the count increment matters!!!
    randomNum -= i;
    if(randomNum == 0) {
        console.log("Yay! I sold them all!")
    }
} while(randomNum > 0); 


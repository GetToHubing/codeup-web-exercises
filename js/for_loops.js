"use strict";

//#2
(function showMultiplicationTable() {
    let i = 1;
    while(i < 11) {
        console.log('7 x ' + i + ' = ' + (7 * i) );
        i++
    }
})();

// #3
(function tenRandomNumbers() {
    let x = 0;
    for(let i = 0; i < 10; i++) {
        x = Math.floor(Math.random() * (200 - 20) + 20);
        if(x % 2 == 0) {
            console.log(x + " is even");
        } else {
            console.log(x + " is odd");
        }
    }
})();

// #4
(function pyramid() {
    for(let i = 1; i < 10; i++) {
        let empty = "";
        for(let j = 0; j < i; j++) {
            //console.log(i); //QUESTION--------------------cannot for the life of me to get the outputs to print on the same line when they should 
            empty += i;
        }
        console.log(empty);
    }
})();
//finally got it to work but it feels...wrong
(function pyramid() {
    for(let i = 1; i < 10; i++) {
        let x = i.toString();
        console.log(x.repeat(i));
    }
})();

// #5
(function subtractFive() {
    for(let i = 100; i >= 0; i -= 5) {
        console.log(i);
        
    }
})()


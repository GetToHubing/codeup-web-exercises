(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store shoppers object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "David",
        lastName: "Banker",
        
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    
    person.sayHello = function () {
            console.log("Hello from " + this.firstName + " " + this.lastName);
        }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (x) {
        let afterDiscount = x.amount - (x.amount * .12);
        if(x.amount > 200) {
            console.log("Good news " + x.name + ", you spent $" + x.amount + " so you get a 12% discount! Your final total will be $" + afterDiscount);
            //alert("Good news " + x.name + ", you spent $" + x.amount + " so you get a 12% discount! Your final total will be $" + afterDiscount);
     } else {
            console.log("Thank you for spending $" + x.amount + " " + x.name + ". Have a good day. Remember, next time if you spend $200 or more you get 12% discount");
            //alert("Thank you for spending $" + x.amount + " " + x.name + ". Have a good day. Remember, next time if you spend $200 or more you get 12% discount");
     }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    
    let books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "The Art of War",
            author: {
                firstName: "Sun",
                lastName: "Tsu"
            }
        },
        {
            title: "Thus Spoke Zarathustra",
            author: {
                firstName: "Friedrich",
                lastName: "Nietzsche"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "Animal Farm",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (x, index) {
        index += 1;
        console.log("Book #" + index);
        console.log(x.title);
        console.log(x.author.firstName + " " + x.author.lastName);
        console.log("---")
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. ---Refactor your code that creates the books array to instead
     *   use your function.---                   
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    function createBookV2(title, author) {
        let nameArray = author.split(" ");
        this.title = title;
        this.author = {
            firstName: nameArray[0],
            lastName: nameArray[1]
        }
    } 
    let s = new createBookV2("1984", "George Orwell");
    console.log(s.author.firstName);

    
    
    function createBook(title, firstName, lastName) {
        this.title = title;
        this.author = { // NOTE TO SELF - this is how you nest an object in an object when using a constructor
            firstName: firstName,
            lastName: lastName
        };
    } 
    let a = new createBook("asdf", "lkjh", 'qwer');
    console.log(a.author.firstName);


    
})();
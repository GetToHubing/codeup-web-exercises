"use strict";
console.log("Hello from external Javascript");
alert("welcome to my website!");
var userInput = prompt("What is your favorite color?");
alert("Cool! " + userInput + " is my favorite color too!");
alert("Ok, lets get down to business. I hear you wanted to rent the movies The Little Mermaid, Brother Bear, and Hercules. Well it's going to cost you $3 per movie per day.");
var littleMermaidDays = prompt("So how many days did you want to rent The Little Mermaid?");
var bigBrotherDays = prompt("Alright, how many days did you want to rent Big Brother?");
var herculesDays = prompt("And lastly how many days did you plan to rent Hercules?");
var finalCharge = (3 * littleMermaidDays) + (3 * bigBrotherDays) + (3 * herculesDays);
alert("That will come out to be $" + finalCharge);

var googleRate = prompt("I heard you work for Google, Amazon, AND Facebook. What the heck man! Whats your hourly wage for Google?")
var googleHours = prompt("What about hours? How many hours do you work a week for Google?");
var amazonRate = prompt("That's not too bad, what about your hourly rate at Amazon?");
var amazonHours = prompt("And your hours at Amazon for the week?");
var facebookRate = prompt(amazonRate * amazonHours + "? That's crazy! What about Facebook? How much are they paying you an hour?");
var facebookHours = prompt("For how many hours??");
var finalPay = (googleRate * googleHours) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
alert("Wow all of that added up equals..." + finalPay + "!");

var numberOfStudentsEnrolled; // the number of students already enrolled in the class
var fullClass = 10;//10 people is the max for the class
var classTime; //time the new class will take place
var alreadyScheduledTime; //the times of the other classes already scheduled
var enrollment = (fullClass < numberOfStudentsEnrolled + 1) && (classTime != alreadyScheduledTime);

var premMember; //true or false
var numberOfItemsBought; //number
var OfferStillValid; //is the special offer still available
var applyOffer = (premMember || numberOfItemsBought < 2) && OfferStillValid; //the offer is applied if the person is a premium member or bought more than 2 items AND the offer is still valid



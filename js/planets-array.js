(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    //#1
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log("#1" , planets);

    //#2
    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log("#2" ,planets);

    //#3
    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log("#3" ,planets);

    //#4
    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log("#4" ,planets);

    //#5
    console.log('Finding and logging the index of "Earth" in the planets array.');
    let x = planets.indexOf("Earth");
    console.log("#5", x);

    //#6
    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log("#6" ,planets);

    //#7
    console.log("Sorting the planets array.");
    planets.sort();
    console.log("#7" ,planets);
})();
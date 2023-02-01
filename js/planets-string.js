(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let x = planetsString.replace(/\|/g, "<br>");
    console.log(x);

    //bonus
    // let y = planetsString.split(" "); 
    // let z = y[0].replace(/\|/g, "</li><li>"); // turns the array back into a string for some reason
    // let a = z.split(" ");
    // a.unshift("<ul><li>");
    // a.push("</li></ul>");
    // let b = a.toString();
    // console.log(b);
    // // absolute garbage code...could not get the methods to chain for some reason


    let newString = planetsString.split("|").join("</li><li>");
    let finalString = '<ul><li>'+newString+'</li></ul>';
    console.log(finalString)
    
})();
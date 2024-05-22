// ----------- 1) Ignore Case While Matching ------------- \\

    // we can use flags to ignore casing
    // e.g. /ignorecase/i will match IGNORECASE, IgNoRecASE etc

    /*** Challenge ***/
        // Write a regex fccRegex to match "freeCodeCamp"
        let myString = "freeCodeCamp";
        let fccRegex = /freecodecamp/i; // Change this line
        let result = fccRegex.test(myString);
    /*** Challenge ***/

// ----------- 1) Ignore Case While Matching ------------- \\



// ----------- 2) Find More Than First Match ------------- \\
    // to find more than one match, we add the global flag "g"

    /*** Challenge ***/
        // Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /twinkle/ig; // Change this line
        let result2 = twinkleStar.match(starRegex); // Change this line
    /*** Challenge ***/

// ----------- 2) Find More Than First Match ------------- \\

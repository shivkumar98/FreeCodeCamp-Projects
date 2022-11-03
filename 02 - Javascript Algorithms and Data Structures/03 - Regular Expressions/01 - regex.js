// ----------- 1) Using the Test Method ------------- \\

    // regex is used to match parts of strings
    // e.g. if we wanted to match the word "the" in "The dog chased the cats", we would use the regex: /the/
    // we can test regex using .test() method

    /*** Example: ***/
        let testStr = "freeCodeCamp"
        let testRegex = /Code/
        let test = testRegex.test(testStr)
        console.log(test)
    /*** Example: ***/

    /*** Challenge: ***/
        // Apply the regex myRegex on the string myString using the .test() method.
        let myString = "Hello, World!";
        let myRegex = /Hello/;
        let result = myRegex.test(myString); // true
    /*** Challenge: ***/


// ----------- 1) Using the Test Method ------------- \\




// ----------- 2) Match Literal Strings ------------- \\

    // regex is case sensitive, and requires a complete match

    /*** Example: ***/
        let testStr2 = "Hello my name is Shiv"
        let regexStr = /shiv/
        console.log(regexStr.test(testStr2)) // false
    /*** Example: ***/

    /*** Challenge: ***/
        // Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match
        let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
        let waldoRegex = /Waldo/; // Change this line
        let result1 = waldoRegex.test(waldoIsHiding);
    /*** Challenge: ***/

// ----------- 2) Match Literal Strings ------------- \\




// ----------- 3) Match a Literal String with Different Possibilities ------------- \\
    
    // we can search for multiple strings using | operator

    /*** Challenge: ***/
        // complete the regex petRegex to match the pets dog, cat, bird or fish
        let petString = "James has a pet cat.";
        let petRegex = /dog|cat|bird|fish/; // Change this line
        let result2 = petRegex.test(petString);
    /*** Challenge: ***/

// ----------- 3) Match a Literal String with Different Possibilities ------------- \\




// ----------- 4) Ignore Case While Matching ------------- \\

    // we can use flags to ignore casing
    // e.g. /ignorecase/i will match IGNORECASE, IgNoRecASE etc

    /*** Challenge 4: ***/
        // Write a regex fccRegex to match "freeCodeCamp"
        let myString2 = "freeCodeCamp";
        let fccRegex = /freecodecamp/i; // Change this line
        let result3 = fccRegex.test(myString);
    /*** Challenge 4: ***/

// ----------- 4) Ignore Case While Matching ------------- \\




// ----------- 5) Extract Matches ------------- \\

    // the .match() method returns all the matches of a regex test

    /*** Example: ***/ 
        console.log("Hello World!".match(/Hello/))  // [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
    /*** Example: ***/

    /*** Challenge:  ***/
        let extractStr = "Extract the word 'coding' from this string.";
        let codingRegex = /coding/; // Change this line
        let result4 = extractStr.match(codingRegex); // Change this line
    /*** Challenge:  ***/

// ----------- 5) Extract Matches ------------- \\




// ----------- 6) Find More Than First Match ------------- \\
    // to find more than one match, we add the global flag "g"

    /*** Challenge: ***/
        // Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /twinkle/ig; // Change this line
        let result5 = twinkleStar.match(starRegex); // Change this line
    /*** Challenge: ***/

// ----------- 6) Find More Than First Match ------------- \\




// ------------ 7) Match Anything with Wildcard Period ------------ \\

    // the . wildcard will match any character in the regex
    // e.g. if we want to match hum, huh, hut, hug etc, the regex would be: /hu./

    /*** Challenge:  ***/
        // Complete the regex unRegex so that it matches run, sun, fun, pun, nun and bun
        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /.un/; // Change this line
        let result6 = unRegex.test(exampleStr);

    /*** Challenge:  ***/


// ------------ 7) Match Anything with Wildcard Period ------------ \\



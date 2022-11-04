// ----------- 1) Using the Test Method ------------- \\

    // regex is used to match parts of strings
    // e.g. if we wanted to match the word "the" in "The dog chased the cats", we would use the regex: /the/
    // we can test regex using .test() method

    /*** Example ***/
    let testStr = "freeCodeCamp"
    let testRegex = /Code/
    let test = testRegex.test(testStr)
    console.log(test)
    /*** Example ***/

    /*** Challenge ***/
        // Apply the regex myRegex on the string myString using the .test() method.
        let myString = "Hello, World!";
        let myRegex = /Hello/;
        let result = myRegex.test(myString); // true
    /*** Challenge ***/

// ----------- 1) Using the Test Method ------------- \\




// ----------- 2) Match Literal Strings ------------- \\

// regex is case sensitive, and requires a complete match

    /*** Example ***/
        let testStr2 = "Hello my name is Shiv"
        let regexStr = /shiv/
        console.log(regexStr.test(testStr2)) // false
    /*** Example ***/

    /*** Challenge ***/
        // Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match
        let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
        let waldoRegex = /Waldo/; // Change this line
        let result1 = waldoRegex.test(waldoIsHiding);
    /*** Challenge ***/

// ----------- 2) Match Literal Strings ------------- \\



// ----------- 3) Extract Matches ------------- \\

    // the .match() method returns all the matches of a regex test

    /*** Example ***/ 
    console.log("Hello World!".match(/Hello/))  // [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
    /*** Example ***/

    /*** Challenge ***/
        let extractStr = "Extract the word 'coding' from this string.";
        let codingRegex = /coding/; // Change this line
        let result4 = extractStr.match(codingRegex); // Change this line
    /*** Challenge ***/

// ----------- 3) Extract Matches ------------- \\


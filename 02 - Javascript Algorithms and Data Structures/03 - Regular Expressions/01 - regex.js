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




// ----------- 3) Match a Literal String with Different Possibilities ------------- \\
    
    // we can search for multiple strings using | operator

    /*** Challenge ***/
        // complete the regex petRegex to match the pets dog, cat, bird or fish
        let petString = "James has a pet cat.";
        let petRegex = /dog|cat|bird|fish/; // Change this line
        let result2 = petRegex.test(petString);
    /*** Challenge ***/

// ----------- 3) Match a Literal String with Different Possibilities ------------- \\




// ----------- 4) Ignore Case While Matching ------------- \\

    // we can use flags to ignore casing
    // e.g. /ignorecase/i will match IGNORECASE, IgNoRecASE etc

    /*** Challenge ***/
        // Write a regex fccRegex to match "freeCodeCamp"
        let myString2 = "freeCodeCamp";
        let fccRegex = /freecodecamp/i; // Change this line
        let result3 = fccRegex.test(myString);
    /*** Challenge ***/

// ----------- 4) Ignore Case While Matching ------------- \\




// ----------- 5) Extract Matches ------------- \\

    // the .match() method returns all the matches of a regex test

    /*** Example ***/ 
        console.log("Hello World!".match(/Hello/))  // [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
    /*** Example ***/

    /*** Challenge ***/
        let extractStr = "Extract the word 'coding' from this string.";
        let codingRegex = /coding/; // Change this line
        let result4 = extractStr.match(codingRegex); // Change this line
    /*** Challenge ***/

// ----------- 5) Extract Matches ------------- \\




// ----------- 6) Find More Than First Match ------------- \\
    // to find more than one match, we add the global flag "g"

    /*** Challenge ***/
        // Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /twinkle/ig; // Change this line
        let result5 = twinkleStar.match(starRegex); // Change this line
    /*** Challenge ***/

// ----------- 6) Find More Than First Match ------------- \\




// ------------ 7) Match Anything with Wildcard Period ------------ \\

    // the . wildcard will match any character in the regex
    // e.g. if we want to match hum, huh, hut, hug etc, the regex would be: /hu./

    /*** Challenge  ***/
        // Complete the regex unRegex so that it matches run, sun, fun, pun, nun and bun
        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /.un/; // Change this line
        let result6 = unRegex.test(exampleStr);

    /*** Challenge  ***/

// ------------ 7) Match Anything with Wildcard Period ------------ \\




// ------------ 8) Match Single Character with Multiple Possibilities ------------ \\

    // Character classes allow you to define a group of characters you wish to match
    // suppose we wanted to match bag, big, bug but not bog
    // then the regex would be /b[aiu]g/

    /*** Challenge ***/
        // use character class to match all vowels
        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeiou]/ig; // Change this line
        let result7 = quoteSample.match(vowelRegex); // Change this line
    /*** Challenge ***/

// ------------ 8) Match Single Character with Multiple Possibilities ------------ \\




// ------------ 9) Match Letters of the Alphabet ------------ \\

    // instead of typing individual characters into the character set, we can specify the range with -
    // e.g. /[a-e]/ will match characters a,b,c,d,e

    /*** Challenge ***/
        // match all the letters in the string quoteSample
        let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
        let alphabetRegex = /[a-z]/ig; // Change this line
        let result8 = quoteSample2.match(alphabetRegex); // Change this line
    /*** Challenge ***/

// ------------ 9) Match Letters of the Alphabet ------------ \\




// ------------ 10) Match Numbers and Letters of the Alphabet ------------ \\
    // we can also use hypens to specify ranges of numbers
    // we can also specify multiple ranges: e.g. /[a-z0-9]/

    /*** Challenge ***/
        // create a single regex which matches letters h-s and numbers 2-6
        let quoteSample3 = "Blueberry 3.141592653s are delicious.";
        let myRegex3 = /[h-s2-6]/ig; // Change this line
        let result9 = quoteSample3.match(myRegex3); // Change this line
    /*** Challenge ***/

// ------------ 10) Match Numbers and Letters of the Alphabet ------------ \\



// ----------- 11) Match Single Characters Not Specified --------------- \\
    // we can create negated character sets using caret: ^

    /*** Challenge ***/
        // create a single regex which matches all characters which are not a number or vowel
        let quoteSample4 = "3 blind mice.";
        let myRegex4 = /[^aeiou0-9]/ig; // Change this line
        let result10 = quoteSample4.match(myRegex4); // Change this line

    /*** Challenge ***/

// ----------- 11) Match Single Characters Not Specified --------------- \\




// ----------- 12) Match Characters that Occur One or More Times --------------- \\

    // we may want to match a charactger which occurs once or more times
    // we can do this with the + operator

    /*** Challenge ***/
        // You want to find matches when the letter s occurs one or more times in Mississippi
        let difficultSpelling = "Mississippi";
        let myRegex12 = /s+/ig; // Change this line
        let result12 = difficultSpelling.match(myRegex);
    /*** Challenge ***/

// ----------- 12) Match Characters that Occur One or More Times --------------- \\




// ----------- 13) Match Characters that Occur Zero or More Times ------------ \\
    // the * operator lets us check if a character occurs 0 or more times
    // e.g. /go*/ will match letters beggining with "g" and optionally suffixed with "o"

    
    /*** Challenge ***/
        // create a regex which matches uppercase A immediately followed by 0 or more lowercase a
        chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
        // Only change code below this line
        let chewieRegex = /Aa*/; // Change this line
        // Only change code above this line
        let result13 = chewieQuote.match(chewieRegex);
    /*** Challenge ***/

// ----------- 13) Match Characters that Occur Zero or More Times ------------ \\




// ------------ 14) Find Characters with Lazy Matching ------------ \\


// ------------ 14) Find Characters with Lazy Matching ------------ \\
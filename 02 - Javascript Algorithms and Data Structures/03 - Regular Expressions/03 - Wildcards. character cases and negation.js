// ----------- 1) Match a Literal String with Different Possibilities ------------- \\
    
    // we can search for multiple strings using | operator

    /*** Challenge ***/
        // complete the regex petRegex to match the pets dog, cat, bird or fish
        let petString = "James has a pet cat.";
        let petRegex = /dog|cat|bird|fish/; // Change this line
        let result = petRegex.test(petString);
    /*** Challenge ***/

// ----------- 1) Match a Literal String with Different Possibilities ------------- \\


// ------------ 2) Match Anything with Wildcard Period ------------ \\

    // the . wildcard will match any character in the regex
    // e.g. if we want to match hum, huh, hut, hug etc, the regex would be: /hu./

    /*** Challenge  ***/
        // Complete the regex unRegex so that it matches run, sun, fun, pun, nun and bun
        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /.un/; // Change this line
        let result2 = unRegex.test(exampleStr);
    /*** Challenge  ***/

// ------------ 2) Match Anything with Wildcard Period ------------ \\


// ------------ 3) Match Single Character with Multiple Possibilities ------------ \\

    // Character classes allow you to define a group of characters you wish to match
    // suppose we wanted to match bag, big, bug but not bog
    // then the regex would be /b[aiu]g/

    /*** Challenge ***/
        // use character class to match all vowels
        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeiou]/ig; // Change this line
        let result3 = quoteSample.match(vowelRegex); // Change this line
    /*** Challenge ***/

// ------------ 3) Match Single Character with Multiple Possibilities ------------ \\


// ------------ 4) Match Letters of the Alphabet ------------ \\

    // instead of typing individual characters into the character set, we can specify the range with -
    // e.g. /[a-e]/ will match characters a,b,c,d,e

    /*** Challenge ***/
        // match all the letters in the string quoteSample
        let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
        let alphabetRegex = /[a-z]/ig; // Change this line
        let result4 = quoteSample2.match(alphabetRegex); // Change this line
    /*** Challenge ***/

// ------------ 4) Match Letters of the Alphabet ------------ \\


// ------------ 5) Match Numbers and Letters of the Alphabet ------------ \\
    // we can also use hypens to specify ranges of numbers
    // we can also specify multiple ranges: e.g. /[a-z0-9]/

    /*** Challenge ***/
        // create a single regex which matches letters h-s and numbers 2-6
        let quoteSample3 = "Blueberry 3.141592653s are delicious.";
        let myRegex5 = /[h-s2-6]/ig; // Change this line
        let result5 = quoteSample3.match(myRegex3); // Change this line
    /*** Challenge ***/

// ------------ 5) Match Numbers and Letters of the Alphabet ------------ \\


// ----------- 6) Match Single Characters Not Specified --------------- \\
    // we can create negated character sets using caret: ^

    /*** Challenge ***/
        // create a single regex which matches all characters which are not a number or vowel
        let quoteSample6 = "3 blind mice.";
        let myRegex6 = /[^aeiou0-9]/ig; // Change this line
        let result6 = quoteSample4.match(myRegex4); // Change this line

    /*** Challenge ***/

// ----------- 6) Match Single Characters Not Specified --------------- \\
// ------------ 1) Specify Upper and Lower Number of Matches -------------- \\

    // quantity specifiers allow you to specify the number of matches for a character
    // e.g. you may want to only matdch strings which have the letter a repeated between 3 and 5 times
    let regex = /a{3,5}\h/

    /*** Challenge ***/
        // change the regex to match the entire phrase only when it has 3 to 6 letter h's
        let ohStr = "Ohhh no";
        let ohRegex = /^Oh{3,6}[^h]*$/i; // Change this line
        let result = ohRegex.test(ohStr);

        console.log("Ohhhhhhh no".match(ohRegex)) // null
    /*** Challenge ***/

// ------------ 1) Specify Upper and Lower Number of Matches -------------- \\



// ------------ 2) Specify Only the Lower Number of Matches -------------- \\

    // you are not required to specify the upper limit of the quantity specifier
    // e.g. if you want to match hah - where a appears a minimum of 3 times
    let multipleARegex = /ha{3,}h/

    /*** Challenge ***/
        // Match the words Hazzah only when it has four or more letter z's
        let haStr = "Hazzzzah";
        let haRegex = /Haz{4,}ah/; // Change this line
        let result2 = haRegex.test(haStr);
    /*** Challenge ***/


// ------------ 2) Specify Only the Lower Number of Matches -------------- \\



// ------------ 3) Specify Exact Number of Matches ------------ \\

    // you specify a single quantity if you need an exact number
    // e.g. we want to match haaah
    let hahRegex = /ha{3}h/

    /*** Challenge ***/
        // Match the word Timber only when there is 4 m's
        let timStr = "Timmmmber";
        let timRegex = /Tim{4}ber/; // Change this line
        let result3 = timRegex.test(timStr);
    /*** Challenge ***/

// ------------ 3) Specify Exact Number of Matches ------------ \\
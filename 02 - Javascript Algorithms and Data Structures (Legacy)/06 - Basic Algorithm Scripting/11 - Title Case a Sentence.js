// --------------- Title Case a Sentence --------------- \

    // Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

    function titleCase(str) {
        let splitString = str.split(" ")
        let sentence = ""
        for (let i = 0; i < splitString.length; i++ ){
            sentence+= splitString[i][0].toUpperCase() + splitString[i].slice(1, splitString[i].length).toLowerCase() + " "
        }
        return sentence.slice(0, sentence.length-1)
    }

    console.log( titleCase("I'm a little tea pot"))


// --------------- Title Case a Sentence --------------- \
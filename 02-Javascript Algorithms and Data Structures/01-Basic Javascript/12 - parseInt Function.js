// ----------- Use the parseInt Function -------------- //

    // parseInt function returns integer from string

    /*** Example 1: ***/

    function convertToInteger(str) {
        return parseInt(str)
    }
    
    convertToInteger("56");

    // The parseInt() method has an overload which specifies the base of the string being parse

        /*** Example 2: ***/
        // Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.


        function convertToInteger(str) {
            return parseInt(str, 2)
        }
        
        convertToInteger("10011");
// --------- 1) Reuse JavaScript Code Using import ---------- \\

    // the import function allows you choose which parts of a module to load.
    // Here is how we import from another file:
    // import { add } from "./10 - Export Function";
    // this will ignore every other export

    /*** Challenge ***/
    /*  Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. 
        These functions are in a file called string_functions.js, which is in the same directory as the current file.   */
        import { lowercaseString, uppercaseString  } from "./10 - Export Function.js"
        
        uppercaseString("hello");
        lowercaseString("WORLD!"); 
 
// --------- 1) Reuse JavaScript Code Using import ---------- \\




// --------- 2) Use * to Import Everything from a File ----------- \\

    // * lets us import all contents of a file.
    // For example, if we wanted to import contents from math_functions.js into a file with the same directory:
    import * as myMathModule from "./math_functions.js";
    
    // we can now use the add and subtract functions from the file:
    myMathModule.add(2,3);
    myMathModule.subtract(10,1)

    /*** Challenge:  ***/
    /*  The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. 
        Use the import * as syntax to import everything from the file into an object called stringFunctions */

    import * as stringFunctions from "./string_functions.js"
    // Only change code above this line

    stringFunctions.uppercaseString("hello");
    stringFunctions.lowercaseString("WORLD!");

// --------- 2) Use * to Import Everything from a File ----------- \\




// --------- 3) Create an Export Fallback with export default ----------- \\

    // the export default syntax is used if only one value is being imported.
    // it is also used to create a fallback value for a module

    /*** Examples: ***/
    export default function add(x,y){ return x+y }
    export default function(x,y) { return x+y }


// --------- 3) Create an Export Fallback with export default ----------- \\




// --------- 4) Import a Default Export ----------- \\

    // the syntax to import a default export is different, the {} are excluded
    import add from "./math_functions.js";

// --------- 4) Import a Default Export ----------- \\
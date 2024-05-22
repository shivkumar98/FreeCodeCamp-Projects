// ----------------- Use export to Share a Code Block ----------------- \\

    // suppose we define a math function which want to export
    // a common approach is use to prfix the method with "export"

    export const add = (x,y) => { return x+y}

    // we could also achieve this by the following:

    const add = (x,y) => { return x+y}
    export { add }

    /*** Challenge: ***/
    // There are two string-related functions in the editor. Export both of them using the method of your choice.

    const uppercaseString = (string) => {
        return string.toUpperCase();
      }
      
      const lowercaseString = (string) => {
        return string.toLowerCase()
      }

    export { uppercaseString, lowercaseString }

// ----------------- Use export to Share a Code Block ----------------- \\
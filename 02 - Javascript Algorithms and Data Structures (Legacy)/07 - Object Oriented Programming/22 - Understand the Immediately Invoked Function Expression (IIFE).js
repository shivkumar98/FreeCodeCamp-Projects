// --------------- Understand the Immediately Invoked Function Expression (IIFE) --------------- \
    // a common pattern in JS is to execute a function as soon as it is declared
    // e.g.
    (
        function(){
            console.log("tweet")
        }
    )() // tweet immediately displayed to console

    /*** Challenge ***/
        // Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
        (function () {
            console.log("A cozy nest is ready");
          })()
          
    /*** Challenge ***/
// --------------- Understand the Immediately Invoked Function Expression (IIFE) --------------- \
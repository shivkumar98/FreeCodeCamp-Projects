// --------------- Boo who Challenge --------------- \
    // check if a value is classified as a boolean primitive
    function booWho(bool) {
        return Boolean(bool) === bool;
    }
          
    booWho(null);

    /* better solution:
    function booWho(bool) {
        return typeof bool === "boolean";
    }
    */
// --------------- Boo who Challenge --------------- \
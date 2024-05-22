// --------------- Understand the Constructor Property --------------- \
    // all objects have an implicit constructor property
    // this property will give the Constructor name but this can be overwritten
    // thereforer using instanceof is better
    
    /*** Challenge ***/
        // write a function which takes candidate parameter and use the constructor property to return true if candidate is Dog
        function Dog(name) {
            this.name = name;
          }
          
          // Only change code below this line
          function joinDogFraternity(candidate) {
            if (candidate.constructor === Dog){
                return true
            } return false
          }
    /*** Challenge ***/
    
// --------------- Understand the Constructor Property --------------- \
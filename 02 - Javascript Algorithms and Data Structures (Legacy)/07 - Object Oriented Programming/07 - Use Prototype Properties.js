// --------------- Use Prototype Properties --------------- \
    // all birds have exactly 2 legs, so we have duplicated code in all Bird objects
    // we can use prototype of Bird to set a static property
    /*** Example ***/
        Bird.prototype.numLegs = 2
    /*** Example ***/
    
    /*** Challenge ***/
        // add numLegs property to prototype of Dog
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.numLegs=4  
          
          
          // Only change code above this line
          let beagle = new Dog("Snoopy");
    /*** Challenge ***/
    
// --------------- Use Prototype Properties --------------- \
// --------------- Understand Where an Object's Prototype Comes From --------------- \
    // an object inhertits the prototype properties from the constructor
    
    /*** Challenge ***/
        // use ifProtoypeOf to check the prototype of beagle
        function Dog(name) {
            this.name = name;
          }
        
        let beagle = new Dog("Snoopy");
        Dog.prototype.isPrototypeOf(beagle)
    /*** Challenge ***/
// --------------- Understand Where an Object's Prototype Comes From --------------- \
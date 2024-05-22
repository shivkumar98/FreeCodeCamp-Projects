// --------------- Understand the Prototype chain --------------- \
    // almost all objects in JS have a prototype. The prototype is an object itself
    function Bird(name) {
        this.name = name;
    }
      
    console.log(typeof Bird.prototype); // object

    // since a prototype is an object, it can have its own prototype!
    
    /*** Challenge ***/
        // Modify the code to show the correct prototype chain.
        function Dog(name) {
            this.name = name;
          }
          
          let beagle = new Dog("Snoopy");
          
          Dog.prototype.isPrototypeOf(beagle);  // yields true
          
          // Fix the code below so that it evaluates to true
          Object.prototype.isPrototypeOf(Dog.prototype);
    /*** Challenge ***/
    
// --------------- Understand the Prototype chain --------------- \
// --------------- Add Methods After Inheritance --------------- \
    
    // a constructor function that inherits from its prototype object from a supertype constructor function can still have its own methods in addition

    /*** Example ***/
        function Animal() { }
        Animal.prototype.eat = function() {
        console.log("nom nom nom");
        };
        function Bird() { }
        Bird.prototype = Object.create(Animal.prototype);
        Bird.prototype.constructor = Bird;

        // functions can be added to Bird's prototype
        Bird.prototype.fly = function(){ console.log("Im flyin"); }
    
    /*** Example ***/
    
    /*** Challenge ***/
        // add code to Dog so it inherits from Animal and the Dogs prototype constructor is set to Dog
        function Animal() { }
        Animal.prototype.eat = function() { console.log("nom nom nom"); };

        function Dog() { }

        // Only change code below this line

        Dog.prototype = Object.create(Animal.prototype)
        Dog.prototype.constructor = Dog

        Dog.prototype.bark = function() {console.log("Woof!")}
        Dog.prototype.eat = function() {console.log("nom nom nom");}


        // Only change code above this line

        let beagle = new Dog();
    /*** Challenge ***/
// --------------- Add Methods After Inheritance --------------- \
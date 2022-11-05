// --------------- Reset an Inherited Constructor Property --------------- \
    // when an object inherits its prototype from another object, it also  inherits the supertype's constructor propery

    /*** Example ***/
        function Bird() { }
        Bird.prototype = Object.create(Animal.prototype);
        let duck = new Bird();
        duck.constructor
        Bird.prototype.constructor = Bird;
        duck.constructor
    /*** Example ***/
    
    /*** Challenge ***/
        // fix the code so duck.constructor and beage.constructor return their respective constructor
        function Animal() { }
        function Bird() { }
        function Dog() { }

        Bird.prototype = Object.create(Animal.prototype);
        Dog.prototype = Object.create(Animal.prototype);
        // Only change code below this line
        Bird.prototype.constructor = Bird
        Dog.prototype.constructor = Dog


        let duck2 = new Bird();
        let beagle = new Dog();
    /*** Challenge ***/
// --------------- Reset an Inherited Constructor Property --------------- \
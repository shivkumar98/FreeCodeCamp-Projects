// --------------- Iterate Over All Properties --------------- \
    // we can add ownProperties an prototypeProperties using for loop

    /*** Example ***/
        function Bird(name) {
            this.name = name;  //own property
        }
        
        Bird.prototype.numLegs = 2; // prototype property

        let duck = new Bird("daffy")

        let ownprops = []
        let protoProps = []
        for (let property in duck){
            if (duck.hasOwnProperty(property)){
                ownprops.push(property)
            } else {
                protoProps.push(property)
            }
        }
    /*** Example ***/
    
    /*** Challenge ***/
        function Dog(name) {
            this.name = name;
        }
        
        Dog.prototype.numLegs = 4;
        
        let beagle = new Dog("Snoopy");
        
        let ownProps = [];
        let prototypeProps = [];

        for (let property in beagle){
            if (beagle.hasOwnProperty(property)){
                ownProps.push(property)
            } else {
                prototypeProps.push(property)
            }
        }
        // Only change code below this line
    /*** Challenge ***/
    
// --------------- Iterate Over All Properties --------------- \
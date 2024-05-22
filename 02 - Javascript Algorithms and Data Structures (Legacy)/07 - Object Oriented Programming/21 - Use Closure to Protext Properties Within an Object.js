// --------------- Use Closure to Protext Properties Within an Object --------------- \
    // we created a bird object whose properties are public
    let bird = {
        name: "Daffy", numLegs: 2
    }
    // we can modify the properties outside the definition
    bird.name = "Duffy"
    
    // the easiest way to make a property private is by creating th variable within the constructor function

    function Bird(){
        let hatchedEggs = 10;
        this.getEggCount = function() { return hatchedEggs }
    }
    let ducky = new Bird();
    
    console.log(ducky)
    
    /*** Challenge ***/
        // changhe weight to a private variable
        function Bird() {
            let weight = 15;
            this.getWeight = function() { return weight }
        }
    /*** Challenge ***/

    
// --------------- Use Closure to Protext Properties Within an Object --------------- \
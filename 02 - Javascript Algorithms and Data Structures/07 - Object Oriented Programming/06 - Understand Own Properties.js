// --------------- Understand Own Properties --------------- \
    // if the constructor defines properties then they are called own properties
    // because they are defined directly on the instance object

    /*** Example ***/
        function Bird(name) {
            this.name = name;
            this.numLegs = 2;
        }
        let duck = new Bird("Donald");
    
      
    /*** Example ***/
    
    /*** Challenge ***/
        // add the own properties of canary to the array ownProps
        function Bird(name) {
            this.name = name;
            this.numLegs = 2;
          }
          
          let canary = new Bird("Tweety");
          let ownProps = [];
          // Only change code below this line
          for (let property in canary){
            ownProps.push(property)
          }
    /*** Challenge ***/
    
// --------------- Understand Own Properties --------------- \
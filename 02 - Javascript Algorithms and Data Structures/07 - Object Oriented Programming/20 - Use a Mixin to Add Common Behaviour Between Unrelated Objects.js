// --------------- Use a Mixin to Add Common Behaviour Between Unrelated Objects --------------- \
    // inheritance is not always the best solution
    // for unrelated objects, we use mixins to set common methods

    /*** Example ***/
        let flyMixin = function(obj){ obj.fly = function(){ console.log("Flying, wooosh");}}
        // we can now apply this mixin on any object
        let bird = { name: "Donald", numLegs: 2}
        let plane = { model: "777", numPassengers: 525}

        flyMixin(bird)
        flyMixin(plane)
    /*** Example ***/
    
    /*** Challenge ***/
        // Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
        let bird2 = {
            name: "Donald",
            numLegs: 2
          };
          
        let boat = {
          name: "Warrior",
          type: "race-boat"
        };

        // Only change code below this line   
        let glideMixin = function(obj){
            obj.glide = function(){}
        }
        glideMixin(bird2)
        glideMixin(boat)     
        
    /*** Challenge ***/
    
// --------------- Use a Mixin to Add Common Behaviour Between Unrelated Objects --------------- \
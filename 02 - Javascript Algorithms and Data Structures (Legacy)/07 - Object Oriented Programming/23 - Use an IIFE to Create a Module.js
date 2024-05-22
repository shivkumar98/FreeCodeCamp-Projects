// --------------- Use an IIFE to Create a Module --------------- \
    // we can use IIFE to define a module

    /*** Example ***/
        // we defined these two methods:
        function glideMixin(obj) {
            obj.glide = function() {
              console.log("Gliding on the water");
            };
          }
          function flyMixin(obj) {
            obj.fly = function() {
              console.log("Flying, wooosh!");
            };
          }

          // we can define this into a module which is executed immediately
          let motionModule = (
            function(){
                return {
                  glideMixin: function(obj){ obj.glide = function(){console.log("Gliding in water")}},
                  flyMixin: function(obj){ obj.fly = function() { console.log("Flying")}}
                }
            }
          )()
    /*** Example ***/
    
    /*** Challenge ***/
        // create a module which wraps the two mixins
        let funModule = (
            function() {
                return {
                    isCuteMixin: function(obj){ obj.isCute = function(){return true}},
                    singMixin: function(obj){ obj.sing = function(){onsole.log("Singing to an awesome tune")}},
                }
            }
        )()
        let isCuteMixin = function(obj) {
            obj.isCute = function() {
              return true;
            };
          };
          let singMixin = function(obj) {
            obj.sing = function() {
              console.log("Singing to an awesome tune");
            };
          };
    /*** Challenge ***/
    
// --------------- Use an IIFE to Create a Module --------------- \
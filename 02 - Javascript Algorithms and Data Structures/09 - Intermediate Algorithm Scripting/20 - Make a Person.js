// fill in the constructor 

/* BEFORE:
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
*/

// AFTER:

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function(){
      return firstAndLast.split(" ")[0];
    }
    this.getLastName = function(){
      return firstAndLast.split(" ")[1];
    }
    this.setFirstName = function(str){
      firstName=str;
    }
     this.setFullName = function(str){
      firstAndLast = str
    }
    this.setLastName= function(str){
     firstAndLast = this.getFirstName()+ " "+str
    }
    this.setFirstName= function(str){
     firstAndLast = str  + " "+this.getLastName();
    }
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getLastName())
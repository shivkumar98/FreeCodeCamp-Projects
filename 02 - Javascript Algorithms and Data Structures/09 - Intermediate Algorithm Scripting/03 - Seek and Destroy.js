// the first argument provided is an array
// subsequent arguments are elements to be destroyed from the array

function destroyer(arr) {
    let destroyed = [...arr]
    for (let i =1; i<arguments.length; i++){
      destroyed = destroyed.filter(x=> x!= arguments[i])
    }
    return destroyed
   }
   
   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
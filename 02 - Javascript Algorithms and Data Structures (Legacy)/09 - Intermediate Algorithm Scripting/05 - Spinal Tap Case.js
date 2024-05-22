// convert a string so that it all lowercase joined by dashes

function spinalCase(str) {
    return str.replace(/([A-Z]+)/g, " $1").toLowerCase().replace(/_/g,"").split(/\s/).filter(i=>i!="").join("-")
   }
   
   console.log(spinalCase("thisIsSpinalTap"))
   console.log(spinalCase("This Is Spinal Tap"))
   console.log(spinalCase("The_Andy_Griffith_Show"))
// create a functions which sums two arguments
// if one argument is supplied, return a function which expects one argument and returns sum

function addTogether(...args){
    const [first, second] = args
    if (args.length == 1 && typeof first==='number'){
        console.log("first: "+first)
        return function(num){ if (typeof num === 'number') return num+first }
    }
    if (args.length==2 && typeof first === 'number' && typeof second === 'number'){
        return first+second
    }    

}
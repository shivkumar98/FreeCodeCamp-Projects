/*
Find the smallest common multiple that can be evenly divided by both parameterws as well as all sequential numbers in the range between these parametes
E.g [1,3] should return 6
*/

function smallestCommons(arr) {
    const gcd = (a,b) => (b===0) ? a : gcd(b, a%b)
    const lcm = (a,b) => a*b/gcd(a,b)

    let [first, second] =arr.sort((a,b)=>a-b)

    
    // getting an array with range
    let range = []
    for (let i=first;i<=second;i++){
      range.push(i)
    }

    let lowestCommonMultiple = lcm(first,second) 
    for (let i=0;i<range.length;i++){
      lowestCommonMultiple=lcm(lowestCommonMultiple,range[i])>lowestCommonMultiple?lcm(lowestCommonMultiple,range[i]):lowestCommonMultiple
    }
    
    return lowestCommonMultiple
}
  
console.log(smallestCommons([1,5]))

// TESTS:
smallestCommons([1, 5]) // should return a number.
smallestCommons([1, 5]) //  should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([2, 10]) // should return 2520.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.
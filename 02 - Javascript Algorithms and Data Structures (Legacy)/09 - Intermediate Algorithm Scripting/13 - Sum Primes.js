// write a functions which sums all the primes less than or equal to num

function sumPrimes(num) {
    function isPrime(num) {
     for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i == 0)
         return false;
     }
     return true;
   }
  
   let sum = 0;
   for (let i=2;i<=num;i++){
   console.log("i: "+i)
     if (isPrime(i)){
       console.log("Prime: "+i)
       sum+=i
       console.log("sum after: "+sum)
     }
   }
     return sum
 }
 
// given a positive integer num, return the sum of all fibonacci numbers less than or equal to num

function sumFibs(num) {
    let sum = 0;
    let fibo = [0,1]
    let fiboLength = fibo.length
    while (fibo[fiboLength-1]<=num){
      fibo.push(fibo[fibo.length-2]+fibo[fibo.length-1])
    }
    console.log(fibo)
    return fibo[fibo.length-1]
  }
  
  sumFibs(4);
  
  console.log(sumFibs(1000))
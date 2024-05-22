// given a positive integer num, return the sum of all fibonacci numbers less than or equal to num

function sumFibs(num) {
  let fibo = [0,1]
  let fiboLength = fibo.length

  while (fibo[fiboLength-1]<=num){
    let sum = fibo[fibo.length-2]+fibo[fibo.length-1]
    if (sum<=num){
      fibo.push(sum)
    }
  }
  
  console.log(fibo)
  return fibo.filter(i=>i%2==1)
          .reduce((sum,i)=>sum+i,0)
          
}



  
  sumFibs(4);
  
  console.log(sumFibs(1000))
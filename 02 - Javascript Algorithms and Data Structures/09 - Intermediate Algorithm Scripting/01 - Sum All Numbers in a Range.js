// you will be passed an array of two numbers
// return the sum of those numbers plus the sum of all the numbers between them
// E.g. sumAll([4,1]) should return 10
// 4+1+2+3=10

function sumAll(arr) {
    let sum = 0;
    let first = arr[0]
    let second = arr[1]
    sum+= (first+second)
    if (first<second){
        for (let i=first+1; i<second; i++){
            sum += i
        }
        return sum
    } else if (first>second){
        for (let i=second+1; i<first; i++){
            sum+= i
        }
        return sum
    } else return sum
  }
  
  sumAll([1, 4]);
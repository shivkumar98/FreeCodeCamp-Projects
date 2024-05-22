// given arr, iterate through each element removing elements till function returns true

function dropElements(arr, func) {
    while (!func(arr[0])){
      arr.shift()
    }
    return arr;
  }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})
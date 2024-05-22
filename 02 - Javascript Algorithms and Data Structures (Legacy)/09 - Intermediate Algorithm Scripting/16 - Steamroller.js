// TASK: write a function which will flatted a nested array

/* TESTS:
steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.
*/

// THIS FREECODECAMP'S SOLUTION
function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i=0;i<arr.length;i++){
      if (Array.isArray(arr[i])){
        flattenedArray.push(...steamrollArray(arr[i]))
      } else {
        flattenedArray.push(arr[i])
      }
    }
    return flattenedArray
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]))
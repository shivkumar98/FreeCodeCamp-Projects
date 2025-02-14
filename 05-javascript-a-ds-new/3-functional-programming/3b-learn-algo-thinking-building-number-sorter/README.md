# 🧠 3B - Learn Basic Algorithmic Thinking by Building a Spam Number Sorter

* Here is a preview of what I will build:
   <details>

   <img src="screenshots/preview.gif" width="400px">
   </details>

## 🛠️ Project Setup 🛠️

* I have been provided the [HTML](code/index.html) and [CSS](code/styles.css)

## 🟥 Obtaining the Elements in Dropdown
* I declare a constant for the sort buttonL
   ```js
   const sortButton = document.getElementById("sort");
   ```
* I create a function which will be called when the `Sort` button is clicked:
   ```js
   const sortInputArray = (event) => {
   event.preventDefault();
   }
   ```
* I add an event listener for the sort button:
   ```js
   sortButton.addEventListener("click", sortInputArray)
   ```
* I need to obtain the values of the 5 dropdowns, instead of using `document.getElementById()` I use `document.getElementsByClassName()` to get all the elements:
   ```js
   const sortInputArray = (event) => {
      event.preventDefault();
      const inputValues = document.getElementsByClassName("values-dropdown");
   }
   ```
* The type returned is HTMLCollection - which is an array like object of all the elements
* I convert this to an array using spread operator:
   ```js
   const inputValues = [...document.getElementsByClassName("values-dropdown")]
   ```
* This returns the HTML element, I now need to map these to the value of the dropdown:
   ```js
   const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);
   // ['8', '2', '4', '1', '3']
   ```
* I want to convert these strings into numbers, so I call the `Number()` function
   ```js
   const inputValues = [...document.getElementsByClassName("values-dropdown")]
      .map((dropdown) => Number(dropdown.value));
   // [8, 2, 4, 1, 3]
   ```

## 🟥 Updating the UI After Clicking Sort
* I create a function to update the display with sorted numbers:
   ```js
   const updateUI = (array = []) => {
   
   }
   ```
* I call the `forEach()` function on the array which takes a callback function with parameters representing the element and index, I use the index to obtain the output element and represent it with a variable:
   ```js
   const updateUI = (array = []) => {
   array.forEach((num, i) => {
      const outputValueNode = document.getElementById(`output-value-${i}`)
   })
   }
   ```
* I update the innerText of the output element to the element from the forEach loop:
   ```js
   const updateUI = (array = []) => {
   array.forEach((num, i) => {
         const outputValueNode = document.getElementById(`output-value-${i}`);
         outputValueNode.innerText = num
   })
   }
   ```
* I now call the `updateUI()` function from within the function that is called when sort button is clicked:
   ```js
   const sortInputArray = (event) => {
      event.preventDefault();
      const inputValues = [...document.getElementsByClassName("values-dropdown")]
         .map((dropdown) => Number(dropdown.value));    
      updateUI(inputValues)
   }
   ```
* Now  when I click the sort button, the elements in the dropdown get copied to the output:
   ![](screenshots/2025-02-13-15-31-05.png)


## 🟥 Bubble Sort
* The first sorting algorithm I will learn is bubble sort
  * With bubble sort, we start from the start of the array and compare the first two elements and swap the element if the first element is greater than second
  * We then move to the second and third elements and repeat
  * When we reach the end of the array, we check if all the elemts are sorted and repeat from first step
  * Here is the algorithm for the sorting:
      ```
      for i 0 to length(A)-1
         for j 0 to length(A)-2
            if A[j] > A[j+1]
               swap A[j] with A[j+1]
      ```
* I declare a `bubbleSort` function with a for loop:
   ```js
   const bubbleSort = (array) => {
      for (let i=0;i<array.length;i++) {
      
      }
   }
   ```
* I nest another loop which loops through all elements EXCEPT the last one, and I print the array and the values in index `j` and `j+1`
   ```js
   const bubbleSort = (array) => {
      for (let i=0;i<array.length;i++) {
         for (let j=0;j<array.length-1;j++) {
            console.log(array, array[j], array[j+1]);
         }
      }
   }
   ```
* To test my bubbleSort function, I call it in the `sortInputArray()` function:
   ```js
   const sortInputArray = (event) => {
      /* EXISTING CODE HERE */
      
      const sortedValues = bubbleSort(inputValues)
      updateUI(sortedValues);
   }
   ```
* Now when I click sort, I see the bubble sort in action:
   ```c
   [8,2,4,1,3] 8 2
   [8,2,4,1,3] 2 4
   [8,2,4,1,3] 4 1
   [8,2,4,1,3] 1 3
   [8,2,4,1,3] 8 2
   [8,2,4,1,3] 2 4
   [8,2,4,1,3] 4 1 
   [8,2,4,1,3] 1 3
   [8,2,4,1,3] 8 2
   [8,2,4,1,3] 2 4
   [8,2,4,1,3] 4 1 
   [8,2,4,1,3] 1 3
   [8,2,4,1,3] 8 2
   [8,2,4,1,3] 2 4
   [8,2,4,1,3] 4 1 
   [8,2,4,1,3] 1 3
   ```
* In my inner loop, I compare the elements with index `j` and `j+1`:
   ```js
   for (let j=0;j<array.length;j++) {
      if (array[j]>array[j+1]) {
         const temp = array[j]
         array[j] = array[j+1]
         array[j+1] = temp
      }
   }
   ```
* After the outer loop is finished, I return the sorted array:
   ```js
   return array;
   ```
* This is the final implementation of `bubbleSort()`:
<details>
   <summary>bubbleSort() implementation</summary>

   ```js
   const bubbleSort = (array) => {
      for (let i=0;i<array.length;i++) {
         for (let j=0;j<array.length-1;j++) {
            if (array[j]>array[j+1]) {
               const temp = array[j]
               array[j] = array[j+1]
               array[j+1] = temp
            }
         }
      }
      return array;
   }
   ```
</details>
const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")]
       .map((dropdown) => Number(dropdown.value));    
  
    const sortedValues = bubbleSort(inputValues)
    updateUI(sortedValues);
 }

const bubbleSort = (array) => {
    for (let i=0;i<array.length;i++) {
        for (let j=0;j<array.length-1;j++) {
            // console.log(array, array[j], array[j+1]);
            if (array[j]>array[j+1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array;
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num
    })
}

sortButton.addEventListener("click", sortInputArray)

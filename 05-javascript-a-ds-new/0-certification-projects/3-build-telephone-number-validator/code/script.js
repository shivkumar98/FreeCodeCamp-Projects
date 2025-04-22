const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const results = document.getElementById("results-div")

checkButton.addEventListener("click", (e) => {
    if (userInput.value === "") 
        alert("Please provide a phone number")
})

clearButton.addEventListener("click", (e) => {
    results.innerHTML =  ""
})
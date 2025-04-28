import { isPhoneNumberValid  } from "./js/functions.js"
const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const results = document.getElementById("results-div")

checkButton.addEventListener("click", (e) => {
    if (userInput.value === "") 
        alert("Please provide a phone number")
    if (isPhoneNumberValid(userInput.value)) {
        results.textContent = "Valid US number: "+userInput.value;
    } else 
        results.textContent = "Invalid US number: "+userInput.value;
})

clearButton.addEventListener("click", (e) => {
    results.innerHTML =  ""
})
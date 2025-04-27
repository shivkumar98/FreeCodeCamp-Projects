import { isPhoneNumberValid  } from "./js/functions.js"
const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const results = document.getElementById("results-div")

checkButton.addEventListener("click", (e) => {
    if (userInput.value === "") 
        alert("Please provide a phone number")
    if (isPhoneNumberValid(userInput.value)) {
        alert("VALID")
    } else 
        alert("invalid")
})

clearButton.addEventListener("click", (e) => {
    results.innerHTML =  ""
})
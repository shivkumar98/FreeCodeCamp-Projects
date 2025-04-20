const checkButton = document.getElementById("check-btn")
const userInput = document.getElementById("user-input")
checkButton.addEventListener("click", (e) => {
    if (userInput.value === "") 
        alert("Please provide a phone number")
})
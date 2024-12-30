const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")
const number = document.getElementById("number")

convertBtn.addEventListener("click", ()=> {
    if (number.value ==="") {
        output.textContent = "Please enter a valid number";
        output.classList.remove("hide")
        output.classList.add("error")
    }
})
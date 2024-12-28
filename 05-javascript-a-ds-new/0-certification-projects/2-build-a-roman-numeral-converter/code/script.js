const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

convertBtn.addEventListener("click", ()=> {
    output.textContent = "Please enter a valid number";
    output.classList.remove("hide")
    output.classList.add("error")
})
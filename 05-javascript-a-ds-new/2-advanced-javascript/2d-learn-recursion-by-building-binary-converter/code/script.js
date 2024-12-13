const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("result")

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value)<0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        checkUserInput()
    }
})
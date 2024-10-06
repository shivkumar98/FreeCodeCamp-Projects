const currentDateParagraph = document.getElementById('current-date')
const dateOptionsSelectElement = document.getElementById('date-options');

// console.log(new Date()); 
// ^^^^ Date Sun Oct 06 2024 11:09:37 GMT+0100 (British Summer Time)

const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1; // this method returns num between 0-11
const year = date.getFullYear();
console.log(day); // 6 
console.log(month); // 10


const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`
currentDateParagraph.textContent = formattedDate;
console.log(formattedDate.split("-").reverse().join("-"))


dateOptionsSelectElement.addEventListener("change", ()=>{
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd": 
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent=`${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`
            break;
        default:
            currentDateParagraph.textContent=formattedDate;
    }
});
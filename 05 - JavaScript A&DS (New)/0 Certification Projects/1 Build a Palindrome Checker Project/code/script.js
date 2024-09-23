/* getting the form element, so i cann listen to when 
   it is submitted
*/
const palindromeChecker = document.getElementById("palindrome-checker");

palindromeChecker.addEventListener("submit", palindromeCheck);

function palindromeCheck(e) {
    e.preventDefault();

    console.log("check clicked")
}

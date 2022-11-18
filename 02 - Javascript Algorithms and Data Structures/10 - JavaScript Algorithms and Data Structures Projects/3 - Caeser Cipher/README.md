# Caesar Cipher

* View my code [here](/10%20-%20JavaScript%20Algorithms%20and%20Data%20Structures%20Projects/3%20-%20Caeser%20Cipher/)

## Project Objectives:

* Write a function which takes a ROT13 encoded string as input and returns a decoded string.

* All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

* ROT13 values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on

## Tests:

* rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

* rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

* rot13("SERR YBIR?") should decode to the string FREE LOVE?

* rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

## Project Comments:

* Fairly simple code, I created an array to store the alphabet and wrote a shift function which will apply the ROT13 algorithms for any given letter
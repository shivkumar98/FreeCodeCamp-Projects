# Cash Register

* View my code [here](/02%20-%20Javascript%20Algorithms%20and%20Data%20Structures/10%20-%20JavaScript%20Algorithms%20and%20Data%20Structures%20Projects/5%20-%20Cash%20Register/Cash%20Register%V3.js)

* View test cases [here](/02%20-%20Javascript%20Algorithms%20and%20Data%20Structures/10%20-%20JavaScript%20Algorithms%20and%20Data%20Structures%20Projects/5%20-%20Cash%20Register/Tests.js)

##  Project Details

* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

* cid is a 2D array listing available currency.

* The checkCashRegister() function should always return an object with a status key and a change key.

* Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

* Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

* Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

## Project Comments

* This was the hardest project I've done so far on FCC! It took me approximately 6 hours to finish this project

* I started with solving the simplest cases first which was to check if the change could be paid in single denomination. I then wrote the condition for when there is not sufficient money in the draw to give to the customer. If the change due was equal to the money in the draw then I just needed to return the cash-in-draw array. 

* Solving the exact change problem was very challenging but I got some assistance from youtube to work out the algorithm

* Overall a very fun and satisfying project to work on!


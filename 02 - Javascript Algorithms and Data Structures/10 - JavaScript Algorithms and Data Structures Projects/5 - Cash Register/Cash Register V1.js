function checkCashRegister(price, cash, cid) {
    let cashInDraw = [...cid]
    let keys = { "PENNY": 0,
                 "NICKEL": 1,
                 "DIME": 2,
                 "QUARTER": 3,
                 "ONE": 4,
                 "FIVE":5,
                 "TEN":6,
                 "TWENTY":7,
                 "ONE HUNDRED":8 }


  
    let change = cash - price;
    console.log("change: "+change)
    let numberOfPennies = change/0.01
    console.log(numberOfPennies)
    let numberOfNickles = change/0.05
    console.log("numberOfNickles: "+ change/0.05)
    console.log("numberOfDimes: "+ change/0.1)
    console.log("numberOfQuarters "+change/0.25 )
    console.log("numberOfDollars "+change/1)
  
    
    
  
    
    let status = "CLOSED"
    let CIDReturn = {"status": status, change: cashInDraw};
    console.log("status: "+ CIDReturn.status)
    console.log("change: "+ CIDReturn.change)
    return CIDReturn
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
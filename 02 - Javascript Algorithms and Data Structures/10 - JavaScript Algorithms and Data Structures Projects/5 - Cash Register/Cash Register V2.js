function checkCashRegister(price, cash, cid) {


  const changeOfPurchase = cash - price;
  const cashIndexes = { "PENNY": 0, "NICKEL": 1, "DIME": 2, "QUARTER": 3, "ONE": 4,"FIVE":5, "TEN":6, "TWENTY":7, "ONE HUNDRED":8 }
  const cashValues = [["PENNY", 0.01], ["NICKEL", 0.05] , ["DIME",0.1] , ["QUARTER",0.25] , ["ONE",1] , ["FIVE",5], ["TEN",10], ["TWENTY",20], ["ONE HUNDRED",100] ]
  function getCashInDrawForCurrency(currency){
    return cid[cashIndexes[currency]]
  }

  function getValueOfCurrency(currency){
    let cashValues = [["PENNY", 0.01], ["NICKEL", 0.05] , ["DIME",0.1] , ["QUARTER",0.25] , ["ONE",1] , ["FIVE",5], ["TEN",10], ["TWENTY",20], ["ONE HUNDRED",100] ]
    return cashValues[cashIndexes[currency]][1]
  }

  

  //assume there is not enough money in draw
  let totalCashInDraw = 0
  let cashInDraw = [...cid]
  console.log("cid: "+cashInDraw)
  for (let i=0; i<cashInDraw.length; i++){
    totalCashInDraw+=cashInDraw[i][1]
  }
  console.log("total "+totalCashInDraw)
  if (totalCashInDraw<changeOfPurchase){
    return {status:"INSUFFICIENT_FUNDS",change:[]}
  }

  // assume money in draw = change due
  if (totalCashInDraw==changeOfPurchase){
    return {status:"CLOSED", change:cid}
  }
  


    
  let numberOfCoinsForChange = cashValues.slice()
  // finding the amount of coins which can fit into the changeOfPurchase
  for (let i=0;i<numberOfCoinsForChange.length;i++){
    numberOfCoinsForChange[i][1] = Math.floor(changeOfPurchase/numberOfCoinsForChange[i][1])
  }
  numberOfCoinsForChange = numberOfCoinsForChange.filter(i=>i[1]!=0).reverse()
  


  // assume change can be returned in a single denominator
  for (let i=0;i<numberOfCoinsForChange.length;i++){
    let coin = numberOfCoinsForChange[i][0]
    let numOfCoin = numberOfCoinsForChange[i][1]
    let valueOfCoin = getValueOfCurrency(coin)
     for (let j=1;j<=numOfCoin;j++){
      if (valueOfCoin*j == changeOfPurchase){
        console.log("change can be returned in single denominator")
        let change = [[coin,changeOfPurchase]]
      
        return {status: "OPEN", change: change}
      }
     }
  }

    // assume change cannot be returned as exact change

    // assume exact change cannot be returned
    return {status:"INSUFFICIENT_FUNDS",change:[]}

}




// console.log("return: "+JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))

// console.log("return: "+JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER",0], ["ONE",0], ["FIVE",0], ["TEN", 0], ["TWENTY",0], ["ONE HUNDRED",0]])))

// console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])))
// should return {status: "INSUFFICIENT_FUNDS", change: []}


// console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])))
//  should return {status: "INSUFFICIENT_FUNDS", change: []}
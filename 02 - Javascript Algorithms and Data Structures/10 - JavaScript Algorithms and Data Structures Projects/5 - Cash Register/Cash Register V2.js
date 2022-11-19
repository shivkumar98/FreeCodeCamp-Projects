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

  let cashInDraw = [...cid]
    
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
        console.log("exact change found")
        let change = [coin,changeOfPurchase]
        let ReturnedChange ={
          status: "CLOSED",
          change: [change]
        }
        return ReturnedChange
      }
     }
  }

}


console.log("return: "+JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))
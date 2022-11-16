// DNA base pairs alway match with AT CG
// the DNA strand is missing a pair element, write a function which matches
// e.g. GCG should return [["G", "C"], ["C", "G"], ["G", "C"]]

function pairElement(str) {
    let returnArr = []
    for (let i=0;i<str.length;i++){
      let DNA = str[i]
      switch (DNA){
        case "G": returnArr.push(["G","C"]);break
        case "C": returnArr.push(["C","G"]);break
        case "T": returnArr.push(["T","A"]);break
        case "A": returnArr.push(["A","T"]);break
      }
    } 
    return returnArr;
  }
  
  console.log(pairElement("GCG"))
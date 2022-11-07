// consider the folowing function:

const prepareTea = () => 'greenTea'

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups<=numOfCups; cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup)
    }
    return teaCups
}

// the following calls the above method:
const tea4FCC = getTea(40) // this gets 40 cups of greenTea
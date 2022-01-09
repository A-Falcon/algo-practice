//our checkCashRegiater function will check for three cases,
//if we can give correct change,
//If wew cant display 'INSUFFICIENT_FUNDS'
//and if we can close up shop when there is no more cash in the drawer.

//first we will declare our function which takes in 3 arguments, price, cash, and cid(cash in drawer)
const checkCashRegister = (price, cash, cid) => {
  //we will declare what our currency is
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    'ONE HUNDRED': 100.0
  }
  // we are going to initialize  our totalCid as 0 so that we can easily add new values later
  let totalCid = 0
  // every loop, our element[i] of cid will add on to our totalCid and then equal our totalCid =>
  for (let element of cid) {
    //totalCid = totalCid + element[i]
    totalCid += element[1]
  }
  // then wew will move our val or totalCid two decimal spaces over
  // totalCid = totalCid.toFixed(2)
  totalCid.toFixed(2)
  // we are going to let our changeDue be determined by the cash that is given - our price => cash - price
  let changeDue = cash - price
  // our 'changeArray' will be what holds our changeDue
  const changeArray = []
  // now, our if statement will check if it meets three cases as mentioned above
  // if our changeDue is GREATER than our totalCid, then...
  if (changeDue > totalCid) {
    //we will return an object with two keys; status: "INSUFFICIENT_FUNDS", change: changeArray.
    return { status: 'INSUFFICIENT_FUNDS', change: changeArray }
    //if our changeDue (which is fixed to two decimal spots) === our totalCid then...
  } else if (changeDue.toFixed(2) === totalCid) {
    // wwe will return status: 'CLOSED' , change: cid
    return { status: 'CLOSED', change: cid }
  } else {
    // if the above cases do not match, we will reverse our cid, which will reverse the array thats given
    cid.reverse()
    // every elem of cid we loop over...
    for (let elem of cid) {
      //we will initialize a temporary variable that will equal and array with our elems nesting array that holds the mounts of one currency we have
      let temp = [elem[0], 0]
      // in our nested while loop, we will check if our changeDue is GREATER or EQUAL to our 'currency's' nested arrays index,
      //and if elem's index is greater than zero
      while (changeDue >= currency[elem[0]] && elem[1] > 0) {
        //what we will do during our loop,
        // our temp variable's index will equal itself added to our currency's nested array's index
        temp[1] += currency[elem[0]]
        // our elem's index is equal to itself mius our currency's nested array's index
        elem[1] -= currency[elem[0]]
        // our changeDue is equal to itself minus our currency's nested array's index
        changeDue -= currency[elem[0]]
        // our changeDue's value will be moved two decimal spots
        changeDue = changeDue.toFixed(2)
      }
      // in our if statment, if our temp variable's index is GREATER than zero then...
      if (temp[1] > 0) {
        // we will push temp into our 'changeArray'
        changeArray.push(temp)
      }
    }
  }
  //now our else statment is done.
  // if changeDue is greater than 0
  if (changeDue > 0) {
    // we will return an object with that status: 'INSUFFICIENT_FUNDS', change: []
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }
  // else, wew return status: 'OPEN', change : changeArray
  return { status: 'OPEN', change: changeArray }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
)

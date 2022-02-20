// Create a function that returns the century from a given number

// We will first declare our function 'century' that has the paramater 'year' which will be a Number
// Our return is expected to be a Number
function century(year: number): number {
// We are going to want a place to store our result while we iterate over our year
// So, we will initialize result as Number staring from 0
  let result:number = 0

// Now that we have a place to store values (our results), we have to create a method to iterate through our arguments
// To do that, we will use a for loop.
// Our condition statment will be:
// Initialize i as 0 ; while i is less than year ; increment.
// (in human speak that is read as: we will start at 0 and while we are less than our year, we will keep looping)
  for (let i = 0 ; i < year ; i++) {
// Now that we have our conditional statment, we have to figure out what to do inside of our loop.
// We have to figure out how to get the century
// To get the century, we can state that every 100 years is 1 century. 
// if i is a modulo of 100,
    if (i % 100 === 0) {
// We will increment our result to keep track of our century
       result++
    }
  }
// We return our result which is our century.
  return result
}

console.log(century(1))
console.log(century(101))
console.log(century(1001))
console.log(century(2001))
console.log(century(2000))
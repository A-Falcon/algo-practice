//to convert an interger to a roman numeral we have to declare relavant
// numbers with thier corresponding symbols

//as alwways we declare out function that takes in a number that we will convert
function convertToRoman(numToConvert) {
  //here we are declaring our array of numbers and our array of roman symbols
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]
  // we are initializing 'result' to an empty string so that we can have a place
  // to return our result
  let result = ''

  // right here we are saying: for each number in our 'numbers' array
  numbers.forEach(function(number, i) {
    // QUICK BREAK DOWWN OF THE FUNCTION:

    // ex: our number is 6. this function will check if 6 matches a symbol,
    // 6 sits between 5: V and 10: X
    //the function will add X  to the result since 6 is GREATER or equal to 5
    // the function will them remove 5 from the original number with 1 left remaining
    //the function will loop again and check if 1 matches and symbols. and it does since 1 = I
    //so our final result would be IV since it equals 6

    // we we keep looping WHILE our passed in 'numberToConvert' is GREATER or EQUAL to our 'number' from our numbers array
    // this will keep checking if our number can match to a roman symbol
    while (numToConvert >= number) {
      // what will be happening during our loop:
      // result = result + roman[i]. we are basically adding a roman number
      // from our roman array to our empty string
      result += roman[i]
      // simutaniously, we are also subtracting 'numToConvert'  with 'number' to loop another number
      //to convert
      //ex: numToConvert = numToConvert - number =>  1 = 6 - 5

      numToConvert -= number
    }
  })
  //we will return our result which is no logn an empty string but our newly convert roman numeral
  return result
}

console.log(convertToRoman(6))

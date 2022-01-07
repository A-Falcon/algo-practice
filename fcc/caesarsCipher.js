// Caesar Cipher is common cipher that is also known as a shift cipher w/ the letters shifted to a certain amount
// A more comming use of this cipher is ROT13  which shifts the alphabet 13 spaces down: A-Z => N-M

//We will be declaring our function rot13 and it takes in a string
function rot13(str) {
  // we will first define out alphabet 'alpha' with an array of the characters
  const alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  //we will also define alpha13 as our shifted alphabet that goes from n-m
  const alpha13 = [
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M'
  ]
  //we will modify our passed in str so that lower case strings can be matched to our alphabets
  let ourStr = str.toUpperCase()

  //we are initializing 'results' as an empty array so that we can pass in our ciphered string at the end
  let results = []
  //our for loops will check if 'ourStr' has a match in our 'alpha'
  for (let i = 0; i < ourStr.length; i++) {
    for (let j = 0; j < alpha.length; j++) {
      // if an index in 'ourStr' matches an index in our 'alpha'
      if (ourStr[i] === alpha[j]) {
        //what we want to push into our results is the index that corrisponds to alpha13's index
        // ex: ourStr[0] (which is H) === alpha[7] (index starts at 0 so H's index is 7)
        // so then since our indecies match:
        // since our [j] === 7, alpha13[7] will be 'U'
        // we will push into our results array.
        results.push(alpha13[j])
      }
    }
  }

  //after looping for each index in a string, we will join them
  //ex: ['H', 'E', 'L', 'L', 'O'] => ['U', 'R', 'X', 'X', 'A' ]
  return results.join('')
  // => ['U', 'R', 'X', 'X', 'A' ] => 'URXXA'
}
console.log(rot13('hello!!'))

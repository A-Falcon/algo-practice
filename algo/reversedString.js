//an example of a reversedString is 'ball' = 'llab'

// first we declar our function which will take a string
const reversedString = function(str) {
  //reminder: strings are like arrays
  //so to return our string reversed, we will access the characters with split('').reverse().join('')
  return (
    str
      // will we first seperate each character into an empty string: ''. ex: 'ball' => 'b' 'a' 'l' 'l'
      .split('')
      // then, we will reverse our "array"(our String) ex: 'b' 'a' 'l' 'l' => 'l' 'l' 'a' 'b'
      .reverse()
      //last we will join the reversed "array" ex: 'l' 'l' 'a' 'b' => llab
      .join('')
  )
}

console.log(reversedString('hello'))

const reversedStr = (str) => {
  return str
    .split('')
    .reverse()
    .join('')
}
console.log(reversedStr('poopy'))

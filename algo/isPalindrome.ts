// a palindrome is when a word or phrase is identical to its revered spelling

//first we declare our function which is going to take a string
 function isPalindrome(s:string):boolean {
  //then we want to make sure to take away any spaces or symbols and only allow numbers and characters in the alphabet
  // do not forget have only one casing throught the word or phrase
  const ourStr:string = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return (
    //once we have cut the fat from out passed in string, we will return true
    //only if ourStr is equal to itself with the following methods.
    ourStr
      .split('')
      .reverse()
      .join('') === ourStr
  )
}
//this will return true because after we took away symbols, spaces,and made it all one casing
//we were able to split, reverse, and join ourStr and still have it equal itself.

console.log(isPalindrome('A man, a plan, a canal: Panama'))

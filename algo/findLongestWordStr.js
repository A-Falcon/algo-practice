//to find the longest word in a string we have to break it up first
//our process should look like this:
//"hello my name is Aunt May" =>
//["hello", "my", "name", "is", "Aunt", "May"] =>
// [5, 2, 4, 4, 3]
// maxLength = 5

//first we declare our function findLongestWord which takes in a string
const findLongestWord = function(str) {
  //we will initialize 'words' as our passed in string split up by spaces
  let words = str.split(' ')
  // then we will initialize our maxLength as 0 so that we can count up to the max length
  let maxLength = 0

  //we will set up the conditions in our for loop.
  //we will initialize i as 0, and if i os less than our words length, we will increment i by one each time
  for (let i = 0; i < words.length; i++) {
    //then we will set an if statment; if an index : [i], in our string : words, has a length greater then maxLength,
    if (words[i].length > maxLength) {
      // if the above statement is true, we will set maxLength to our words length
      maxLength = words[i].length
    }
  }
  //we will return our new maxLength which is the length of the word that was passed in,
  // this loop will continue until there are no more challengers within the array of strings.
  return maxLength
}
console.log(findLongestWord('coding is so much fun'))

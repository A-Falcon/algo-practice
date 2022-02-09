
//our function will take in an array of intergets, and a target
function  binarySearch(nums: number[], target: number): number {
  // we will initialize 'start' to 0 because that is the the start of our array (0 index)
  let start = 0
  // we will initialize 'end' to our out last item in our array
  let end = nums.length - 1
  // while start is less than or equal to end,
    while ( start <= end) {
  // 'middle' will be the result of ((start - end) / 2 ) and we will use Math.floor() to round the number down into an interger
      let middle = Math.floor((start + end) / 2)
      // our goal is to return the interger in our nums array that is equal to our target
      // so if our nums middle === target,
      if (nums[middle] === target) {
        // we will return middle if our statement is true
        return middle
      }
      // if our nums middle is less than our target,
      else if ( nums[middle] < target ) {
        // start will equal our middle + 1
        start = middle + 1
      } 
      // else (if our nums middle is greater than our target),
      else {
        // end will equal our middle -1 
        end = middle - 1
      }
      
 } 
 //if our number does not exist, we will return -1
   return -1
}

console.log(binarySearch([1,3,6,7,8,10,13,17,20], 10))
function  binarySearch(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1
    while ( start <= end) {
      let middle = Math.floor((start - end) / 2)
      if (nums[middle] === target) {
        return middle
      }
     if ( nums[middle] < target ) {
        start = middle + 1
      } else {
        end = middle -1
      }
 }
    return -1
}

console.log(binarySearch([1,3,6,7,8,10,13,17,20], 17))
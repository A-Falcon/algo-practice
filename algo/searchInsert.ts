
function searchInsert(nums: number[], target:number):number {
  let start = 0
  let end = nums.length -1
  let mid = Math.floor((start + end) /2) 

  while( nums[mid] !== target && start < end ) {
    if (nums[mid] < target) {
        start = mid +1
    } 
    else {
      end = mid
    }
    mid = ~~((start + end) /2)
  }
  return nums[mid] >= target ? mid : mid+1
}

console.log(searchInsert([1,2,3,4,6,7,8,9,10], 5))
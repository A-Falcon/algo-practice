//Given a sorted Array of distict intergers (non of them are repeating) and a target value, return the index if the target
//is found. if not ,return the index it would have been in .

//this algo is in O(log n) time

// searchInsert will take two arguments, a numbers array and a number. we will be returing a number
function searchInsert(nums: number[], target:number):number {
  // we will initialize our values
  let start = 0
  let end = nums.length -1
  let mid = Math.floor((start + end) /2) 

  // while our nums middle (nums[mid]) does NOT equal our target and start is less than end
  while( nums[mid] !== target && start < end ) {
    //if the above statement is true, we will check if nums[mid] is less than target
    if (nums[mid] < target) {
      //if that above statment is true, then we will redeclare start as mid + 1
        start = mid +1
    } 
    else {
      //if the above statment was not true, we will redeclare end as mid
      end = mid
    }
    // redefine mid as the same formula
    mid = ~~((start + end) /2)
  }
  // return condition: 
  //is our nums[mid] greater than or rqual to target ?
  //if it is, return mid
  //if it is not, return mid + 1 <= this will give us the index of a missing number
  return nums[mid] >= target ? mid : mid+1
}

console.log(searchInsert([1,2,3,4,6,7,8,9,10], 5))
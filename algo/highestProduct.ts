
function solution(inputArray:number[]): number{
  let products:number[] = []
  for (let i = 1; i < inputArray.length; i++) {
    products.push(inputArray[i] * inputArray[i-1])
  }
  console.log(products)

  let highestProduct:number = Math.max(...products)
  return highestProduct
}

console.log(solution([3, 6, -2, -5, 7, 3]))

//irelavent
// type MyTuple = [number, string]

// const ting: MyTuple = [2 , '2']
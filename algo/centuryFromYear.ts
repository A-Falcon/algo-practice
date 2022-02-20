function century(year: number): number {
  let result:number = 0
  
  for (let i = 0 ; i < year ; i++) {
    if (i % 100 === 0) {
       result++
    }
  }

  return result
}

console.log(century(1))
console.log(century(101))
console.log(century(1001))
console.log(century(2001))
console.log(century(2000))
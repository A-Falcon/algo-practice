//a factorial is a type of math operation that multiplies the numbers before the given number
// so if our number is !6, we will multiply 6 and the numbers that come before 6.
// ex: 6! =>  6* 5 * 4 * 3 * 2 * 1 == 720

// to start, we will declare our function which will take in a number
const factorialize = function(num) {
  // then we will initialize a variable as 1 since the return values for our function will always
  // be greter than or equal to 1.
  // if we had set it to 0, our loop condition would always be false since anthing multipled by 0 is 0
  // we will be using the keywword let since it is able to be redeclared.
  let product = 1
  // after that, we have to set up our condition for our for loop.
  // we initialize i as 2 since anythin multiplies by 1 is itself,
  // then if i is less than or equal to num, we will increment i by 1
  for (let i = 2; i <= num; i++) {
    // we will loop our product multipled by our interger in our condition
    // ex: 1 * 2 = 2 , now that our interger is == 2 (equal to itself) we will increment to 3 for our next loop
    product *= i
  }
  // we will return 2 as our product since 1prodcut * 2interger = 2,
  //from there on its rinse and repeat until our loop runs (num) times
  return product
}
console.log(factorialize(5))

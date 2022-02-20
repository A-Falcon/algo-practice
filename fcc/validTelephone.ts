// A valid telephone number will be in these formats:
//  555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555 etc.
// and area code is needed ex: (702), only a United States country code ex: (1) is accepted but not needed.

// we will be using regex for this function

// to start we will declare our function that will take in a string
function validTelephone(str:string):boolean {
  //this regex will test and reutrn if our string...:
  // there is one/zero '1' in the begining,
  // if there is one/zero 'whitespace'(hyphen or space),
  // one/zero opening '(',
  // then will check for digits 0-9 (quantity of 3),
  // one/zero closing ')',
  // another one/zero whitespace,
  // again digits 0-9 (quantify of 3),
  // one more one/zero whitespace,
  // and digits 0-9 (quantity of 4),
  // then end '$'.
  return /^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)
    ? true
    : // this regex will test if our string matches if :
    // if there is one/zero 'whitespace'(hyphen or space),
    // ONE opening '(',
    // then will check for digits 0-9 (quantity of 3),
    // ONE closing ')'
    // another one/zero whitespace,
    // again digits 0-9 (quantify of 3),
    // check if our whitespace is a hyphen '-',
    // and digits 0-9 (quantity of 4),
    // then end '$'.
    /^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)
    ? true
    : // this regex will test if our string matches if :
    // if there is one/zero 'whitespace'(hyphen or space),
    // then will check for digits 0-9 (quantity of 3),
    // check there is one/zero '-',
    // one/zero whitespace
    // again digits 0-9 (quantify of 3),
    // check there is one/zero '-',
    // again if there is one/zero whitespace
    // and digits 0-9 (quantity of 4),
    // then end '$'.
    /^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)
    ? true
    : false
}

console.log(validTelephone('702- 555- 5555'))

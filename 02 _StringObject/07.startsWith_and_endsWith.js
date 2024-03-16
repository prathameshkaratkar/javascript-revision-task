// ! the startsWith() method returns true if a string starts with a specified string. otherwise it returns false, the startsWith() method is case sensitive. 

/*
    Syntax => string.startsWith(searchString)

*/

// Examples 
const str = 'Cats are the best!'
const result = str.startsWith('Cats')
console.log(result)  // output => true
console.log(str.startsWith('are'))  //output => false

console.log(str.startsWith('are',4)) // ouput => false
console.log(str.startsWith('are',5)) // ouput => true




// ! The js str.endsWith() method is used to check whether the given string ends with the characters of the specified string or not

/*
    Syntax => string.endsWith(searchString)
              string.endsWith(searchString, length)
*/


console.log(str.endsWith('best!')) // ouput => true
console.log(str.endsWith('best')) // output => false

console.log(str.endsWith('best', 17)) // output => true

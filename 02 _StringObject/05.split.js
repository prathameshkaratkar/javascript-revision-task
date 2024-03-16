// ! split method is used for divide your string into substring based on 
/*
sytax =>  String.split()
          String.split(seperator)
          String.split(seperator, limit)
*/

const string = 'The morning is upon us.'
const arr0 = string.split()
const arr1 = string.split(' ')
const arr2 = string.split('')

console.log('arr0',arr0)   // output => arr0 [ 'The morning is upon us.' ]
console.log('arr1',arr1)   // output => arr1 [ 'The', 'morning', 'is', 'upon', 'us.' ]
console.log('arr2',arr2)  /* output => arr2 [
                                                    'T', 'h', 'e', ' ', 'm',
                                                    'o', 'r', 'n', 'i', 'n',
                                                    'g', ' ', 'i', 's', ' ',
                                                    'u', 'p', 'o', 'n', ' ',
                                                    'u', 's', '.'
                                                ] 
  */

console.log(string.split('o')) // output => [ 'The m', 'rning is up', 'n us.' ] => it excluded the 'o' letter from given string
console.log(string.split('o',2))  // output => [ 'The m', 'rning is up' ]
console.log(string.split('o',3)) // output => [ 'The m', 'rning is up', 'n us.' ]


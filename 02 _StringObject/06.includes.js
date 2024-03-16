// !  the includes() method determines whether an array includes a certain value among its entries, returning true ro false as appropriate.
/*
    Syntax => string.includes(searchString)
              string.includes(seachString, position)
*/

// Examples

const sentence ='The quick brown fox for jumps over the lazy dog.'
console.log(sentence.includes('fox')) // output => true
console.log(sentence.includes('Fox')) // output => false

console.log(sentence.includes('fox',0)) // output => true
console.log(sentence.includes('fox',16)) // outupt => true
console.log(sentence.includes('fox',17)) // output => false
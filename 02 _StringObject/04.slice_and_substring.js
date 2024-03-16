// String.slice () => string.slice(indexStart)
// String.substring ()=> string.substring(indexStart)

const s = 'the morning is upon us.'
console.log(s.length)

// ! slice method is working as a breaking the string and  move forward 

console.log(s.slice(12)) // output => 'is upon us.'
console.log(s.slice(-11)) // output => 'is upon us.'
console.log(s.slice(23)) // output => ''

// string.slice(indexStart,indexEnt)

console.log(s.slice(13,16))  // output => 's u'
console.log(s.slice(16,13))  // output => ''
console.log(s.slice(-8,-4))  // output => 'upon'
console.log(s.slice(-8,4)) // output => ''
console.log(s.slice(8,-4)) // ouput => 'ing is upon'



// ! substring method is working same as slice method but have some difference like if you give negative value it start from zero indexing

console.log(s.substring(12)) // output => 'is upon us.'
console.log(s.substring(-11)) // output => 'the morning is upon us.'
console.log(s.substring(23)) // output => ''

// string.substring(indexStart, indexEnd)

console.log(s.substring(13,16)) // output => 's u'
console.log(s.substring(16,13)) // output => 's u'
console.log(s.substring(-8,-4)) // output => ''
console.log(s.substring(-8,4)) // output => 'The '
console.log(s.substring(8,-4)) // output => 'the morn' => because -4 is negative so it act is 0 and 8 is greater that 0 so the indexing start from 0 to 8th index thats why it prints 'the morn'
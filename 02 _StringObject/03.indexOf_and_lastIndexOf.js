// ! String.indexOf() =>  string.indexOf(searchString)
// ! String.lastIndexOf() => string.lastIndexOf(searchString)


// lets se some example 

const s = 'The code undefined code code !'

/*
 the explanation behind the code is how indexing works 
 The => 0,1,2
 extra space => 3
 code => 4,5,6,7
 extra space => 8
 undefined =>9,10,11,12,13,14,15,16,17
 extra space => 18
 code => 19,20,21,22
 extra space => 23
 code => 23,25,26,27
 extra space => 28
 ! => 29

*/

// use of indexOf method for finding the initial index of word

const indexs = s.indexOf('code') // it declares the index of that word starting from 
console.log(indexs)
console.log(s.indexOf('undefined'))  // it declares the index of that words starting from


// use of lastIndexOf method for finding

console.log(s.lastIndexOf('undefined'))
console.log(s.lastIndexOf('code',23))
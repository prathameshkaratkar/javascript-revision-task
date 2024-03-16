// ! the repeat() method returns a string with numbers of copies of a string. The repeat() method returns a new string. The repeat() method deos not dchange the original string. 

/*
    Syntax => string.repeat(count)  // count is number of copies that you want
*/

// examples 

console.log('abc'.repeat(0))  //output => ''
console.log('abc'.repeat(1)) // output=> 'abc'
console.log('abc'.repeat(2)) // output => 'abcabc'
console.log('abc'.repeat(3.5))  // ouput => 'abcabcabc'
console.log('abc'.repeat(-1))  // output => RangeError
console.log('abc'.repeat(1/0)) // output => RangeError

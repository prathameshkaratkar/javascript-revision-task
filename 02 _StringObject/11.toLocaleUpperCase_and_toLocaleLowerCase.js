/* ! the toLocaleUpperCase() method in js is used to convert a string to uppercase letters base on the current locale 
  Let's break it down:

  *Method Name: toLocaleUpperCase()
  *Description: converts a string to uppercase letters, considering the language settings of the browser.
  *Locale: The locale is determined by the language settings of the user's browser
  *Origin string: the method does not modify the origin string
  *Result: It returns a new string with uppercase characters according to the current locale.

*/

const text = 'Hello World!'
let result = text.toLocaleUpperCase();
console.log(result)  // output => 'HELLO WORLD!'


// for toLocaleLowerCase method

let small = 'Hello World!'
let results = small.toLocaleLowerCase();
console.log(results)
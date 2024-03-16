// ! this is used to join two mroe more strings in js

/*
    Syntax => str1.concat(str2)
           => str1.concat(str2, str3)
           => str1.concat(str2,str3, str4,..., strN)

        performance -> It is strongly recommeded to use the assignment operators (+, +=) instead of the concat() method
*/

const str1 = 'Hello'

const str2 = 'World'

const greeting = str1.concat(str2) 
console.log(greeting)  // ouput => 'HelloWorld'

console.log(str1.concat(' ',str2))  // output => 'Hello World'


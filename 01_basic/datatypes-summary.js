// primitive 

console.log('')
// 7 types : String , Number, Boolean, Null, undefined, Symbol,BigInt
// console.log('hello')
const score = 100
const scoreValue = 100.3

const isLoggendIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)


const bigNumber = 59856254856295n

// Reference (Non primitive)

// Array, Objects, Functions, (WebEvents)

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "prathamesh",
    age: 22,
}

const myFunction = function(){
    //console.log('hello world');
}
console.log(typeof bigNumber)
console.log(typeof heros);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
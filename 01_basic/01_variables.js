const accountId = 144553
let accountEmail = 'prathamesh@facebook.com'
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2  not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/



accountEmail = "abc@google.com"
accountPassword = '21212121'
accountCity = 'Banglore'

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
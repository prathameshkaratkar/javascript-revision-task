const profile = {
    name: 'Rohit',
    name: 'Harshada',
    name: 'Vishal',
    name: 'Sravan',
    city: 'Indore',
    company: 'Razorpay',
    address: {
        area: 'Central Market',
        pincode: 411048,
        block: 'AB'
    },
    hobbies: ['music','travel','writing'],
    isMarried: true,
    horoscope: 'Aries',
    badHabits: null,
    name: 'Ankit'
};

/**
 * @description {Accessing object values}
 * - Obj.key
 * - Obj['key']
 */

//Access properties

console.log('name:',profile.name,profile['name'])
console.log('Areas:',profile.address.area,profile['address']['area']) // this is used in nested objects
console.log('pincode:',profile.address.pincode,profile['address']['pincode'])

//Optional chaining
console.log('StateCode:',profile?.StateCode?.state) // it says undefined
console.log('statusucode:',profile.statusCode)
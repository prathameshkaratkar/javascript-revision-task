const profile = {
    name: 'Rohit',
    name: 'Harshada',
    name: 'Vishal',
    name: 'Sravan',
    city: 'Indore',
    Company: 'PayPal',
    address: {
        area: 'Central Market',
        pincode: 411048,
        block: 'AB'
    },
    hobbies: ['music','travel','writing'],
    isMarried: true,
    horoscope: 'Aries',
    badHabits: null,
    name: 'Rahul'
};

const profileCp = {
    name: 'Rohit',
    Company: 'PayPal',
    isMarried: true,
    horoscope: 'Aries',
    badHabits: null
}

const profileCp2 = {
    name: 'Rahul',
    Company: 'Google',
    isMarried: true,
    horoscope: 'Scorpian',
    badHabits: null
}

const compareObjects = (obj1, obj2) =>{
    // write logic here
}

//compare profile & profiileCp
console.log(compareObjects(profile,profileCp)) // true

// compare profile & profileCp2
console.log(compareObjects(profile,profileCp2))  // false

// compare profileCp & profileCp2 
console.log(compareObjects(profileCp,profileCp2))  // false
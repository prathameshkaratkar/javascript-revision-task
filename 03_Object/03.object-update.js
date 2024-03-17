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

// Object.key = newValue

profile.name = 'Dhanraj',
profile.company = 'PayTM',
profile.address.area = 'Pune,Wakad'

console.log('Profile:',profile)
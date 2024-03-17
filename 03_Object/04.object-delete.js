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

delete profile.address;
delete profile.horoscope;
delete profile.hobbies;
delete profile.name;

console.log(profile)
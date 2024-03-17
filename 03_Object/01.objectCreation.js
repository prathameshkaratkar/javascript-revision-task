// ! objects are key value pairs 

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

const products = [
    {
        id: 1,
        title: 'iphone 15 pro max',
        price: 142000
    },
    {
        id: 2,
        title: 'iPhone Charger Type C',
        price: 1800
    },
    {
        id: 3,
        title: 'Apple Cleaning Kit',
        price: 1900
    }
]

const meetUsers = [
    {
        id: 1,
        name: 'vidhya skill school',
        isMuted: false,
        isPresenting: true,
        thumbnail: 'URL',
        videoURL: 'URL',
        isAdmin: true
    },
    {
        id: 2,
        name: 'Prathamesh Karatkar',
        isMuted: true,
        isPresenting: false,
        thumbnail: 'URL',
        videoURL: 'URL',
        isAdmin: false

    }
];

console.log('Profile:',profile)
console.log('MeetUsers:',meetUsers)
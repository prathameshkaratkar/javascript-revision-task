const user = {
    username: 'prathamesh karatkar',
    email: 'karatkarprathamesh@gmail.com',
    name: 'John Doe',
    age: 30,
    gender: 'male',
    country: 'United States',
    interests: ['coding','reading','traveling'],
    membership: 'gold',
    last_login: '2024-03014T08:30:00Z'
}

// Hello userName, how are you doing at countryName.
//I know being a gender it's very hectic to work, specially at this age i.e ageNo.

const {username,country,gender,age} = user;
const message = `Hello ${username}, how are you doing at ${country}. I know being a ${gender} it's a very hectic to work, specially at this ${age}.`
console.log(message)
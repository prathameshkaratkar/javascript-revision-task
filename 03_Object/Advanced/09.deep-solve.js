const originalPerson = {
    firstName: 'John',
    LastName: 'Doe',
    address: {
        city: 'New York',
        country: "USA"
    }
}

const deepCopyPerson = JSON.parse(JSON.stringify(originalPerson));

//Modify the original object
originalPerson.firstName = 'Alice';
originalPerson.address.city = 'Los Angeles';

console.log('Original Person:',originalPerson);
console.log('Deep copy Person:',deepCopyPerson)
const profile = {
    name: 'Rahul',
    city: 'pune',
    details: {
        code: 101
    }
}

const cpProfile = { ...profile};

cpProfile.name = 'Vishal',
cpProfile.details.code = 777;

console.log("profile:",profile);
console.log('cpProfile:',cpProfile);
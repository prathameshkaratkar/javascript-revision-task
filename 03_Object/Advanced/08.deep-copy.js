const profile = {
    name: 'Rahul',
    city: 'pune',
    details: {
        code: 101
    }
}

// Exact deep copy
const cpProfile = structuredClone(profile);

cpProfile.name = "Vishal";
cpProfile.details.code = 777;

console.log('Profile:',profile);
console.log('cpProfile:',cpProfile);
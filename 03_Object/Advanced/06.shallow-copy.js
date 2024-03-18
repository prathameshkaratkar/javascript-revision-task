const profile = {
    name: 'Rahul',
    city: 'pune'
}

// !  a shallow copy refers to creating a new object or array and copying the top-level structure of the original data structure. However, for nested objects or arrays within the original structure, only references to those nested objects or arrays are copied, rather than duplicating them




const cpProfile = profile;

cpProfile.name = 'Vishal';
console.log('profile',profile);
console.log('cpProfile',cpProfile);

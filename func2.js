const user = {
    name: 'John', 
    age: 77,
}

function copyUser(user){
    const newUser = {};
    Object.entries(user).forEach(([key, value]) => newUser[key] = value)

    return newUser;

}

const copiedUser = copyUser(user);
copiedUser.name = 'Sam';

console.log(copiedUser);
console.log(user);
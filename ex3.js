const user = {
    name: 'User' ,
    age: 35 ,
    address: {
        city: 'Tbilisi',
        country: 'Georgia'
    }

}

const user1 = {
    ...user,
    address: {
        ...user.address
    }
}

user1.name = 'User1';
user1.address.city = 'Batumi';

console.log(user)
console.log(user1)
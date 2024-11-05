const user = {
    name : 'user1',
    age : 40,
    banks :[
        {
            address:{
                city : "Kutaisi"
            }
        },
        {},
        { 
            address:{
                city : "Tbilisi"
            }
        }
    ]
}

function getCity(user) {
    const { banks: [,, {address : {city} = {} } = {}]} = user
    return city
}


console.log(getCity(user))


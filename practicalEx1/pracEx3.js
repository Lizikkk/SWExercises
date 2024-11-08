const users = [
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 19},
    {name: 'Tekla', age: 27},
    {name: 'Kate', age: 54}
]

const sortedByAge = (array) => {
    return array.sort((a, b) => a.age - b.age)
}

console.log(sortedByAge(users))

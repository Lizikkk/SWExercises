const persons =     [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}]

persons.sort(function(a, b){
    return a.age - b.age;
})

const youngest = persons.find(function(person){
    return person.age === persons[0].age
});

console.log(youngest.name + ' is the youngest.')
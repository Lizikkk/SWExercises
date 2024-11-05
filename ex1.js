function multiply(a,b,...args){

    let product = 1;

    for(let num of args){
        product *= num
    }

    return [a * b, product]
}

const numList = [1, 10, 3, 17, 5]

console.log(multiply(...numList))
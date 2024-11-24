function expo(num, power, cb){
    if(power === 0){
        return cb(1)
    }       
    return expo(num, power - 1, (result) => {
        return cb(result * num)
    })
}

function cb(result){
    console.log(result)
}

expo(5,3, cb)
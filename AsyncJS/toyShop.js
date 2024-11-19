function makeToys(ms){
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5){
            setTimeout(() => {
                console.log(`Toy has been made successfully in ${ms} ms`)
                resolve('undefected')}, ms)
        }else{
            setTimeout(() =>  {reject('Defected')}, ms)
        }
    })
}



function sellToys(status, ms){
    return new Promise((resolve, reject) => {
        if(status === 'undefected'){
            if(Math.random() > 0.6){
                setTimeout(() => {
                console.log(`Toy has been sold in ${ms} ms`)
                resolve('sold')}, ms)
            }else{
                setTimeout(() => {
                    reject(`Toy wasn't sold`)},ms)
            }
        }else{
            reject('Cannot sell a defective toy')
        }
    }) 

}

function deliverToys(toy, ms){
    return new Promise((resolve,reject) => {
        if(toy === 'sold'){
            setTimeout(() => {
                console.log(`Toy has been delivered in ${ms} ms`)
                resolve('Delivered')}, ms)
        }else{
            setTimeout(() => reject(`Failed to deliver the toy`), ms)
        }
    })

}

makeToys(3000)
    .then((status) => sellToys(status, 1000))
    .then((toy) => deliverToys(toy, 2000))
    .catch(err => console.log(err))


function makeToys(ms){
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5){
            setTimeout(() => {
                console.log(`Toy has been made succesfully in ${ms} ms`)
                resolve('undefected')}, ms)
        }else{
            setTimeout(() =>  {reject('Defective toy')}, ms)
        }
    })
}



function sellToys(status, ms){
    return new Promise((resolve, reject) => {
        if(status === 'undefected'){
            if(Math.random() > 0.4){
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
            setTimeout(() => reject('Failed to deliver the toy'),ms)
        }
    })

}

async function processToy() {
    try{
        const status = await makeToys(3000)
        const toy = await sellToys(status,1000)
        const deliveryStatus = await deliverToys(toy, 2000)
        console.log(deliveryStatus)
    }catch(err){
        console.log(err)
    }
}

processToy()
console.log("Hi!")

function mySetTimeout(ms){
    return new Promise((resolve) => {
        setTimeout(() => {resolve("This is working as promised!")}, ms)
        })
    }

mySetTimeout(2000).then(
    result => console.log(result))
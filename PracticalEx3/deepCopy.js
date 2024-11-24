function deepCopy(el){
    return new Promise((resolve, reject) => {
        if(el !== null && typeof el === "object"){
            const deepCopyEl = JSON.parse(JSON.stringify(el));
            resolve(deepCopyEl)
        }else reject("Input isn't an object type")
    }
)}

function testDeepCopy(el){
    deepCopy(el)
    .then(res => console.log(res, "is an object type"))
    .catch(err => console.log("Error:" ,err))
}

testDeepCopy([1,2,3])
testDeepCopy({name:"lizi"})
testDeepCopy("hi")
testDeepCopy(10)
testDeepCopy(true)

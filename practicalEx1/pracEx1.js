const replacedResult = (string, valueToReplace, valueToReplaceWith) => {

    const values = string.split(" ")

    for(let i = 0; i < values.length; i++){
        if(values[i] === valueToReplace){
            values[i] = valueToReplaceWith
        }  
    }

    return values.join(" ")
    
}

console.log(replacedResult("Hello, My name is Lizi !", "Lizi", "Mariam"))
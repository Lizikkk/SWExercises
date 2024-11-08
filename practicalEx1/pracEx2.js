const upperCasedWords = (String) => {

    const words = String.split(" ")
    let result = ""

    for(let word of words){
        result += word.charAt(0).toUpperCase() + word.slice(1) + " "
    }

    return result
}


console.log(upperCasedWords("hi, my name is lizi!"))
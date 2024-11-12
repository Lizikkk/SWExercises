
const hideBtn = document.createElement('button')
const textDiv = document.createElement('div')

textDiv.textContent = "Hello, Click On Button To Disappear"
hideBtn.textContent = "Hide Text"


document.body.appendChild(textDiv)
document.body.appendChild(hideBtn)


hideBtn.onclick = () => {
    textDiv.style.display = 'none'
}
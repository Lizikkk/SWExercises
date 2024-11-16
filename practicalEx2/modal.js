const modalBtn = document.querySelector('.modalBtn')
const closeBtn = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

modalBtn.addEventListener('click', () => {
    modal.style.display = "flex"
    overlay.style.display = "block"
})

function closeModal(el, el1, el2){
    el.addEventListener('click', () =>{
        el1.style.display = 'none'
        el2.style.display = 'none' 

        overlay.style.removeProperty('background-color')
        userInput.value = ''

    })

}

closeModal(closeBtn, modal, overlay)

const colorBtn = document.querySelector('.colorBtn')
const userInput = document.querySelector('.userInput')

const modalColors = ["red", "blue", "green", "black", "white"]

colorBtn.addEventListener('click', () => {
    const colorValue = userInput.value.toLowerCase()
    if (colorValue && modalColors.includes(colorValue)) {
        overlay.style.backgroundColor = colorValue
        userInput.value = ''
    } else {
        alert(`Please enter one of the following colors: ${modalColors}`)
    }
});

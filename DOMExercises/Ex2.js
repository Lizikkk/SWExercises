
const cardDiv = document.createElement('div')
cardDiv.setAttribute('id', 'card')

const h2El = document.createElement('h2')
h2El.textContent = 'Gandalf'

const aEl = document.createElement('a')
aEl.setAttribute('href', '#')
aEl.textContent = 'Go to profile'


cardDiv.appendChild(h2El)
cardDiv.appendChild(aEl)

document.body.appendChild(cardDiv)


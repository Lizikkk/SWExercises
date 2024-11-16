const calculateBtn = document.querySelector('.calculateBtn')
const avgResult = document.querySelector('.avgResult')

calculateBtn.addEventListener('click', () => {
    const numInput = document.getElementById('numInput').value 
    if(!numInput){
        alert('No numbers entered.')
    }

    const numsArr = numInput.split(':').map(Number)

    if(numsArr.some(isNaN)){
        alert('Please enter valid numbers separated by colons.')
    }else{
    const sum = numsArr.reduce((total, num) => total + num, 0)
    const avg = sum / numsArr.length

    avgResult.textContent = `Average: ${avg.toFixed(2)}`
    
}

})
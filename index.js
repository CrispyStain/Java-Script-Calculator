const label = document.querySelector('#label')
const btn0 = document.querySelector('#btn0')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btnPlus = document.querySelector('#btnPlus')
const btnMinus = document.querySelector('#btnMinus')
const btnTimes = document.querySelector('#btnTimes')
const btnEquals = document.querySelector('#btnEquals')
const btnSlash = document.querySelector('#btnSlash')
const btnDot = document.querySelector('#btnDot')
const btnClear = document.querySelector('#btnClear')
let count = 0

// 0-9 buttons
btn0.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 0
})
btn1.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 1
})
btn2.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 2
})
btn3.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 3
})
btn4.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 4
})
btn5.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 5
})
btn6.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 6
})
btn7.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 7
})
btn8.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 8
})
btn9.addEventListener('click', () =>{
    if(count > 0){
        label.value = ''
        count = 0
    }
    label.value += 9
})

// other buttons 
btnClear.addEventListener('click', () =>{
    label.value = ''
})
btnPlus.addEventListener('click', () =>{
    label.value += '+'
    count = 0
})
btnMinus.addEventListener('click', () =>{
    label.value += '-'
    count = 0
})
btnTimes.addEventListener('click', () =>{
    label.value += '*'
    count = 0
})
btnSlash.addEventListener('click', () =>{
    label.value += '/'
    count = 0
})
btnDot.addEventListener('click', () =>{
    label.value += '.'
    count = 0
})

//Equals function 
btnEquals.addEventListener('click', () =>{   
    equals()
    count += 1
})

function equals(){
    let theValue = label.value
    try{label.value = eval(theValue) }
    catch(error){label.value = 'ERROR'}
}

// clear calculator on page reload 
window.addEventListener('unload', () => {
    label.value = ''
})


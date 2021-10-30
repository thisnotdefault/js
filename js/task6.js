'use strict'
let rub = "рубл"
let userInput = prompt("Какое количество денег вы хотите положить на ваш счет в банке?")
let stringLength = userInput.length
let character = userInput.charAt(stringLength - 1)
   
if(parseInt(character) == 1){
    alert(`Ваша сумма в ${userInput} ${rub}ь успешно зачислена.`)
}else if (parseInt(character) > 1 && parseInt(character) < 5) {
    alert(`Ваша сумма в ${userInput} ${rub}я успешно зачислена.`)
}else if(parseInt(character) >= 5 || parseInt(character) == 0){
    alert(`Ваша сумма в ${userInput} ${rub}ей успешно зачислена.`)
}else{
    alert("Введите число!")
}



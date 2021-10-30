'use strict'

function sumTwoNumbers(a, b) {
    return a + b
}

function diffTwoNumbers(a, b) {
    return a - b
}

function divTwoNumbers(a, b) {
    return a / b
}

function mulTwoNumbers(a, b) {
    return a * b
}


function mathOperation(arg1,arg2, operation) {
    switch (operation){
        case '+':
            return sumTwoNumbers(arg1,arg2)
        case '-':
            return diffTwoNumbers(arg1,arg2)
        case '*':
            return mulTwoNumbers(arg1,arg2)
        case '/':
           return divTwoNumbers(arg1,arg2);
    }
}

alert(mathOperation(2,2,'+'))
alert(mathOperation(5,3,'-'))
alert(mathOperation(3,3,'*'))
alert(mathOperation(16,4,'/'))

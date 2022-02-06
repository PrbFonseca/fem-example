var total = 0;
var firstValue = '0';
var secondValue = '0';
var tempOperator = '';


var buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(){
    processCharacter(event.target.innerText);
});

var updateScreen = function(value) {
    let screen = document.querySelector('.screen');
    screen.innerText = value;
};

var processCharacter = function(character) {
    console.log(character);

    // Check if number or operator
    if (isNaN(character)) {
        processOperator(character);
    } else {
        processNumber(character);
    }
};

var processOperator = function(operator) {

    if (operator === '<-') {
        firstValue = '0';
        tempOperator = '';
        total = 0;
        secondValue = '';
        updateScreen(0);
        return;
    }

    if (operator === '=') {
        calculateTotal(firstValue, tempOperator, secondValue);
        updateScreen(total);
        return;
    }

    if (firstValue !== 0) {
        tempOperator = operator; 
    } 
}


var processNumber = function(value) {

    if (firstValue === '0') {
        firstValue = value; 
    } else {
        if (tempOperator === '') {
            firstValue = firstValue +  value; 
        } else {
            secondValue = secondValue +  value; 
        }
    }

    console.log('temp number:' + firstValue)
    console.log('process number:' + value)

    updateScreen(firstValue);
};

var calculateTotal = function(n1, op, n2) {
    console.log(`${n1} ${op} ${n2}`);
    total = eval(`${n1} ${op} ${n2}`);

};
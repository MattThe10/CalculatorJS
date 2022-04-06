
let lowerNumber = '';
let upperNumber = '';
let currentOperand = null;

const buttons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operand]');
const allClearButton = document.querySelector('[data-AC]');
const resultButton = document.querySelector('[data-result]');
const upperValueText = document.querySelector('[data-upper-value]');
const lowerValueText = document.querySelector('[data-lower-value]');

function add(x,y){
    return parseInt(x) + parseInt(y);
}

function subtract(x,y){
    return parseInt(x) - parseInt(y);
}

function multiply(x,y) {
    return parseInt(x) * parseInt(y);
}

function divide(x,y){
    if(y == '0'){
        return lowerValueText.textContent = "Error: Dividing by 0";
    } else {
        return parseInt(x) / parseInt(y);
    }
}

function chooseOperation(operation){
    operation = operation.toString();
   lowerNumber = lowerValueText.textContent;
   currentOperand = operation;
   upperValueText.textContent = lowerNumber + currentOperand;
   upperNumber = lowerNumber;
   updateDisplay();
}

function allClear(){
    lowerValueText.textContent = '';
    upperValueText.textContent = '';
    currentOperand = null;
}

function operate(x,y,operand){
    switch(operand){
        case '+' : lowerValueText.textContent = add(x,y); upperValueText.textContent = '';break;
        case '-' : lowerValueText.textContent = subtract(x,y); upperValueText.textContent = '';break;
        case '*' : lowerValueText.textContent = multiply(x,y); upperValueText.textContent = '';break;
        case '/' : lowerValueText.textContent = divide(x,y); upperValueText.textContent = '';break;
        default : return;
    }
}

function updateDisplay(){
    lowerValueText.textContent = ''
}

function appendNumber(number){   
    lowerValueText.textContent += number;
    lowerNumber = lowerValueText.textContent;
}

buttons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operationButtons.forEach((button) => 
    button.addEventListener('click', () => chooseOperation(button.textContent))
)

allClearButton.addEventListener('click', () => allClear());
resultButton.addEventListener('click', () => operate(upperNumber,lowerNumber,currentOperand));





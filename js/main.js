/* eslint-disable */

var inputNumber = document.getElementById('inputNumber');
var resultElement = document.getElementById('result');
var firstOperand;
var secondOperand;
var globalOperator;

var shouldClearResult = false;

//clear input field value and set the placeholder to the parameter
function clearInput(val) {
  inputNumber.value = "";
  inputNumber.placeholder = val;
};

//clear all global operand and operator variables
function clearOperandsResult() {
  firstOperand = null;
  secondOperand = null;
  globalOperator = null;
};

function clearCalc() {
  clearInput(0);
  clearOperandsResult();
}

function numPadClick(num) {
  //determine whether to clear the input field before printing to it
  if (shouldClearResult && inputNumber.value != "-") {
    inputNumber.value = "";
  }
  inputValue = inputNumber.value;
  if (num !== "." || inputValue.indexOf(".") === -1) {
    inputNumber.value += num;
  }
  shouldClearResult = false;
};

function plusMinus() {
  //determines if input field should be cleared
  if (shouldClearResult) {
    inputNumber.value = "";
  }
  //determines sign of existing input field value
  inputSignValue = Math.sign(Number(inputNumber.value));
  //if the input field is a positive number or zero, change to a negative value
  if(inputSignValue === 1 || inputSignValue === 0) {
    inputNumber.value = "-" + inputNumber.value;
  //else if the input field is a negative number or negative zero, change to positive value
  } else if(inputSignValue === -1 || inputSignValue === -0) {
    inputNumber.value = inputNumber.value.slice(1);
  }
};

function setOperator(operator) {
  //If the first operand is populated, calculate using the global operator variable
  //before changing the global operator to the operator clicked.
  //If first operand is not poulated, set it to the value of the input field,
  //set the globalOperator to the operator clicked, and then clear the input field.
  if (firstOperand) {
    calc(globalOperator);
    globalOperator = operator;
  } else {
    firstOperand = Number(inputNumber.value);
    globalOperator = operator;
    clearInput(inputNumber.value);
  }
};

function equalsFunction() {
  if (firstOperand) {
    calc(globalOperator);
    clearOperandsResult();
  }
};

function calc(operator) {
  var result;
  secondOperand = Number(inputNumber.value);
  switch (operator) {
    case "add":
      result = firstOperand + secondOperand;
      break;
    case "subtract":
      result = firstOperand - secondOperand;
      break;
    case "multiply":
      result = firstOperand * secondOperand;
      break;
    case "divide":
      secondOperand === 0 ? result = "Can't divide by 0" : result = firstOperand / secondOperand;
      break;
  }
  //print result here
  inputNumber.value = result;
  //sets first operand to result in case of further calculations
  firstOperand = result;
  //tells app to clear the result before accepting inputNumber
  shouldClearResult = true;
};

/* eslint-disable */

var inputNumber = document.getElementById('inputNumber');
var resultElement = document.getElementById('result');
var firstOperand;
var secondOperand;
var globalOperator;

var shouldClearResult = false;

//clears input value only
function clearInput(val) {
  inputNumber.value = "";
  inputNumber.placeholder = val;
};

//clears all global operand and operator variables
function clearOperandsResult() {
  firstOperand = null;
  secondOperand = null;
  globalOperator = null;
};

function numPadClick(num) {
  if (shouldClearResult) {
    inputNumber.value = "";
  }
  inputValue = inputNumber.value;
  if (num !== "." || inputValue.indexOf(".") === -1) {
    inputNumber.value += num;
  }
  shouldClearResult = false;
};

function plusMinus() {
  console.log("finish this");
};

function setOperator(operator) {
  //determine if this is the first operand
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
  calc(globalOperator);
  clearOperandsResult();
};

function calc(operator) {
  var result;

  secondOperand = Number(inputNumber.value);
  switch (operator) {
    case add:
      var result = firstOperand + secondOperand;
      break;
    case subtract:
      var result = firstOperand - secondOperand;
      break;
    case multiply:
      var result = firstOperand * secondOperand;
      break;
    case divide:
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

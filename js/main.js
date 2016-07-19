/* eslint-disable */

var inputNumber = document.getElementById('inputNumber');
var resultElement = document.getElementById('result');
var firstOperand;
var secondOperand;
var globalOperator;

//clears input value only
function clearInput() {
  inputNumber.value = "";
};

//clears all global operand and operator variables
function clearOperandsResult() {
  firstOperand = null;
  secondOperand = null;
  globalOperator = null;
};

function numPadClick(num) {
  inputValue = inputNumber.value;
  if (num !== "." || inputValue.indexOf(".") === -1) {
    inputNumber.value += num;
  }
};

function plusMinus() {
  console.log("finish this");
};

function setOperator(operator) {
  //determine if this is the first operand
  if (firstOperand) {
    console.log(globalOperator);
    calc(globalOperator);
    globalOperator = operator;
    console.log(globalOperator);
  } else {
    console.log(operator);
    firstOperand = Number(inputNumber.value);
    globalOperator = operator;
    clearInput();
  }
};

function equalsFunction() {
  calc(globalOperator);
  clearOperandsResult();
};

function calc(operator) {
  var result;
  console.log(operator)
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
  console.log(result);
  //sets first operand to result in case of further calculations
  firstOperand = result;
  clearInput();
};

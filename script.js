let firstInput = document.querySelector("#firstInput");
let lastInput = document.querySelector("#lastInput");
let output = document.querySelector(".output");
let operatorSpan = document.querySelector(".operatorSpan");
let equalSpan = document.querySelector(".equalSpan");

let btnEqual = document.querySelector(".btnEqual");
let removeBtn = document.querySelector(".removeBtn");

let firstValue = 0;
let secondValue = 0;
let result = 0;
let operator = "";

function collector(number) {
  if (operator == "") {
    if (firstValue == 0) {
      firstValue = number;
      firstInput.innerHTML = firstValue;
    } else {
      firstInput.innerHTML += number;
      firstValue = +firstInput.innerHTML;
    }
  } else {
    if (secondValue == 0) {
      secondValue = number;
      lastInput.innerHTML = secondValue;
    } else {
      lastInput.innerHTML += number;
      secondValue = +lastInput.innerHTML;
    }
  }
}

function setOperator(op) {
  if (result != 0) {
    console.log(result);
    domReset();
    firstValue = result;
    secondValue = 0;
    result = 0;
    operator = op;
    operatorSpan.innerHTML = operator;
    firstInput.innerHTML = firstValue;
    equalSpan.innerHTML = "";
  } else if (result == 0 && operator == "") {
    operator = op;
    operatorSpan.innerHTML = operator;
  }
}

function Calculate(firstVal, secondVal, operation) {
  if (operation == "+") {
    return firstVal + secondVal;
  } else if (operation == "-") {
    return firstVal - secondVal;
  } else if (operation == "x") {
    return firstVal * secondVal;
  } else if (operation == "/") {
    return secondVal == 0 ? "you mad?" : firstVal / secondVal;
  }
}

function domReset() {
  //   operator = "";
  firstInput.innerHTML = "";
  lastInput.innerHTML = "";
  operatorSpan.innerHTML = "";
  output.innerHTML = "";
  equalSpan.innerHTML = "";
}

function fullReset() {
  domReset();
  firstValue = 0;
  secondValue = 0;
  result = 0;
  operator = "";
}

btnEqual.addEventListener("click", () => {
  result = Calculate(firstValue, secondValue, operator);
  output.innerHTML = result;
  equalSpan.innerHTML = "=";
  firstValue = result;
  secondValue = 0;
});

removeBtn.addEventListener("click", () => {
  fullReset();
});



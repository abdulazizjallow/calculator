"use strict";

const previousEl = document.getElementById("previos-operation");
const currentEl = document.getElementById("current-operation");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const btnEl = document.querySelectorAll(".btns");
const numberBtn = document.querySelectorAll(".btn-num");
const equalBtn = document.querySelector(".btn-equal");
const buttons = document.querySelectorAll('button[id]');
const btnOperator = document.querySelectorAll('.btn-op');
const btnPoint = document.querySelector(".btn-point");
let firstNum = "";
let secondNum = "";
let currentOperation = null;
let shouldReset = false;

function resetScreen() {
  shouldReset = false;
  currentEl.textContent = "";
}

function appendNumber(num) {
  if(currentEl.textContent === "0" || shouldReset) resetScreen()
  currentEl.textContent += num;
}

function appendPoint() {
  if(currentEl.textContent.includes("."))return;
  currentEl.textContent += ".";
}

function appendOperator(op) {
  if(currentOperation !== null) evaluate();
  firstNum = currentEl.textContent;
  currentOperation = op;
  previousEl.textContent = `${firstNum} ${currentOperation}`;
  shouldReset = true;
  
}

function evaluate() {
  if(currentOperation === null || shouldReset) return;

  secondNum = currentEl.textContent;
  currentEl.textContent = roundResult(operate(currentOperation, firstNum, secondNum));
 
  previousEl.textContent = `${firstNum} ${currentOperation} ${secondNum}`;
  
  currentOperation = null;
}

function deleteNum() {
  if(currentEl.textContent.length > 1) {
     currentEl.textContent = currentEl.textContent.toString().slice(0, -1);
  } else {
    currentEl.textContent = "0";
  }
} 

function clear() {
  firstNum = "";
  secondNum = "";
  currentOperation = null;
  currentEl.textContent = "0";
  previousEl.textContent = "";
}

// eventlisteners

numberBtn.forEach((num)=> {
  num.addEventListener('click', function() {
     appendNumber(num.textContent)
  })
})

equalBtn.addEventListener("click", ()=> {
  evaluate();
})

deleteBtn.addEventListener("click", deleteNum)
clearBtn.addEventListener("click", clear)
btnPoint.addEventListener("click", appendPoint);

btnOperator.forEach((op)=> {
  op.addEventListener('click', ()=> {
    appendOperator(op.textContent)
  })
})



function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

const add = function (num1, num2) {
   return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const divide = function (num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '×':
      return multiply(num1, num2);
    case '÷':
      if(num2 === 0)return null;
      else return divide(num1, num2);
    default:
      null;
  }
}

"use strict";

const previousEl = document.getElementById("previos-operation");
const currentEl = document.getElementById("current-operation");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const btnEl = document.querySelectorAll(".btns");
const numberBtn = document.querySelectorAll(".btn-num");
const equalBtn = document.querySelector(".btn-equal");
const buttons = document.querySelectorAll('button[id]')

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
      inputNumber(this.id)
  })})

  

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

const operation = function (operator, num1, num2) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  switch(operator) {
    case '+': 
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '×':
      return multiply(num1, num2)
    case '÷': 
      if(num2 === 0) return null
      else return  divide(num1, num2)
    default: 
      return null
  }
}

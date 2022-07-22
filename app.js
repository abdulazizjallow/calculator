"use strict";

const previousEl = document.getElementById("previos-operation");
const currentEl = document.getElementById("current-operation");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const btnEl = document.querySelectorAll(".btns");

btnEl.forEach((btn) => {
    return btn.addEventListener('click', ()=> console.log('hey'))
})
"use strict";
const navBtnEl = document.querySelector(`.nav-btns`);
const headerEl = document.querySelector("header");
const dropDownEl = document.querySelectorAll(`.dropdown-btn`);
const dropDownContentEl = document.querySelectorAll(`.dropdown-content`);
const arrowDownEl = document.querySelectorAll(`.arrow-down`);

navBtnEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`nav-open`);
  for (let i = 0; i < arrowDownEl.length; i++) {
    arrowDownEl[i].src = `/images/icon-arrow-dark.svg`;
  }
});

for (let i = 0; i < dropDownContentEl.length; i++) {
  dropDownEl[i].addEventListener(`click`, function () {
    arrowDownEl[i].classList.toggle(`rotate`);
    dropDownContentEl[i].classList.toggle(`display`);
  });
}

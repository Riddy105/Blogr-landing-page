"use strict";
const navBtnEl = document.querySelector(`.nav-btns`);
const headerEl = document.querySelector("header");
const dropDownEl = document.querySelectorAll(`.dropdown`);
const dropDownContentEl = document.querySelectorAll(`.dropdown-content`);
const arrowDownEl = document.querySelectorAll(`.arrow-down`);

// ON CLICK OF NAV BUTTON, WE WANT TO OPEN THE MOBILE NAVIGATION AND THEN REMOVE A CLASS FROM THE
// 'DROPDOWN'  WHICH MAKES IT POSSIBLE TO DISPLAY THE DROPDOWN CONTENT ON MOBILE WITHOUT ANY HOVER INTEFFERENCE
// AND WE ALSO WANT TO CHANGE THE ARROW BESIDE EACH ANCHOR ELEMENT TO THE RED-COLORED ONE SO AS TO BE VISIBLE
// ON A WHITE BACKGROUND
navBtnEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`nav-open`);
  for (let i = 0; i < arrowDownEl.length; i++) {
    dropDownEl[i].classList.remove(`dropdown-desktop`);
    arrowDownEl[i].src = `/images/icon-arrow-dark.svg`;
  }
});

// ON CLICK OF ANY DROPDOWN CONTAINER, WE WANT TO DISPLAY/HIDE THE DROPDOWN CONTENTS BY TOGGLING A CLASS OF `DISPLAY`
// TO THE DROPDOWN CONTENT.
for (let i = 0; i < dropDownContentEl.length; i++) {
  dropDownEl[i].addEventListener(`click`, function () {
    arrowDownEl[i].classList.toggle(`rotate`);
    dropDownContentEl[i].classList.toggle(`display`);
  });
}

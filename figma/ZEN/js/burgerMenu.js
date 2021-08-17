'use strict';

const iconMenu = document.querySelector('.ZEN-header__burgerMenu');
const menuBody = document.querySelector('.ZEN-header__menu-body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lockZEN');
		iconMenu.classList.toggle('activeZEN-header');
		menuBody.classList.toggle('activeZEN-header');
	});
}
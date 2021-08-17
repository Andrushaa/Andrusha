'use strict';

const iconMenu = document.querySelector('.Meditation-header__burgerMenu');
const menuBody = document.querySelector('.Meditation-header__menu-body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lockMeditation');
		iconMenu.classList.toggle('activeMeditation-header');
		menuBody.classList.toggle('activeMeditation-header');
	});
}
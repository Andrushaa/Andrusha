const iconMenu = document.querySelector('.menu-burgerZEN');
const menuBody = document.querySelector('.menu-bodyZEN');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lockZEN');
		iconMenu.classList.toggle('activeHeaderZEN');
		menuBody.classList.toggle('activeHeaderZEN');
	});
}
const iconMenu = document.querySelector('.menu-burgerZEN');
const menuBody = document.querySelector('.menu-bodyZEN');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lockZEN');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
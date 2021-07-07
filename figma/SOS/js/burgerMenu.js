const iconMenu = document.querySelector('.menu-burgerSOS');
const menuBody = document.querySelector('.menu-bodySOS');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lockSOS');
		iconMenu.classList.toggle('activeHeaderSOS');
		menuBody.classList.toggle('activeHeaderSOS');
	});
}
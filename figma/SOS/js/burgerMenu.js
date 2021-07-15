const iconMenu = document.querySelector('.menu-burgerSOS');
const menuBody = document.querySelector('.menu-bodySOS');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lockSOS');
		iconMenu.classList.toggle('activeHeaderSOS');
		menuBody.classList.toggle('activeHeaderSOS');
	});
}

const listMenuSOS = document.querySelector('.menu-listSOS');

if (listMenuSOS) {
	listMenuSOS.addEventListener('click', function(a) {
		document.body.classList.toggle('lockSOS');
		iconMenu.classList.toggle('activeHeaderSOS');
		menuBody.classList.toggle('activeHeaderSOS');
	})
}
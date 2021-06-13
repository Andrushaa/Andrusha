var i = 0;
var image = document.getElementById("imgSwitch-1");
var imgs = new Array('../SOS/img/screenshot-1.jpg', '../SOS/img/screenshot-2.jpg', '../SOS/img/screenshot-3.jpg');
function imgSwitch1() {
    i++;
    i %= imgs.length;
    image.src = imgs[i];
}
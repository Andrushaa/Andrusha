let backgrounds = document.getElementById("backgrounds");

backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-1-min.jpg)';

$(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-2-min.jpg)';
    } else {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-1-min.jpg)';
    }
});



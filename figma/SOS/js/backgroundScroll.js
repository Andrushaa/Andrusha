let backgrounds = document.getElementById("backgrounds");

backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-6-min.jpg)';
backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-5-min.jpg)';
backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-4-min.jpg)';
backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-3-min.jpg)';
backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-2-min.jpg)';
backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-1-min.jpg)';


$(window).scroll(function() {
    if ($(this).scrollTop() > 4100) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-6-min.jpg)';
    } else if ($(this).scrollTop() > 3200) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-5-min.jpg)';
    }   

    else if ($(this).scrollTop() > 2400) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-4-min.jpg)';
    }
    
    else if ($(this).scrollTop() > 1600) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-3-min.jpg)';

    }

    else if ($(this).scrollTop() > 610) {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-2-min.jpg)';
    }
    
    else {
        backgrounds.style.backgroundImage = 'url(../SOS/img/background/bg-image-1-min.jpg)';
    }

});
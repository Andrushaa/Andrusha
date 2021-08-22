const ShowUp = document.querySelector('.ShowUp');

window.onscroll = () => {
    if(window.scrollY > 1000) {
        ShowUp.classList.remove('ShowUp-hidden');
    } else if (window.scrollY < 1000) {
        ShowUp.classList.add('ShowUp-hidden');
    }
}

ShowUp.onclick = () => {
    window.scrollTo(0, 0);
};
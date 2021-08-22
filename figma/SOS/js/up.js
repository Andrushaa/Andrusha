const ShowUp = document.querySelector('.ShowUp');

function scrollTo(element) {
  window.scroll({
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

window.onscroll = () => {
    if(window.scrollY > 1000) {
        ShowUp.classList.remove('ShowUp-hidden');
    } else if (window.scrollY < 1000) {
        ShowUp.classList.add('ShowUp-hidden');
    }
}

ShowUp.onclick = () => {
    scrollTo(section1);
};
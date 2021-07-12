   $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        }
    });

function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var button = document.querySelector('.pageUp');
var up = document.querySelector('#up');

button.addEventListener('click', () => {
  scrollTo(up);
})
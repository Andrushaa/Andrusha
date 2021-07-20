function scrollToo(element) {
  window.scroll({
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var buttonMain = document.querySelector('#main-Out');
var section1 = document.querySelector('#mainIn');

buttonMain.addEventListener('click', () => {
  scrollToo(section1);
})

var buttonAbout = document.querySelector('#about-Out');
var section3 = document.querySelector('#aboutIn');

buttonAbout.addEventListener('click', () => {
  scrollToo(section3);
})

var buttonFeatures = document.querySelector('#features-Out');
var section4 = document.querySelector('#featuresIn');

buttonFeatures.addEventListener('click', () => {
  scrollToo(section4);
})

var buttonRequirement = document.querySelector('#requirements-Out');
var section5 = document.querySelector('#requirementsIn');

buttonRequirement.addEventListener('click', () => {
  scrollToo(section5);
})

var buttonQuotes = document.querySelector('#quotes-Out');
var section6 = document.querySelector('#quotesIn');

buttonQuotes.addEventListener('click', () => {
  scrollToo(section6);
})
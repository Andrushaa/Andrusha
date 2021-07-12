function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var buttonAbout = document.querySelector('#aboutOut');
var section3 = document.querySelector('#aboutIn');

buttonAbout.addEventListener('click', () => {
  scrollTo(section3);
})


var buttonFeatures = document.querySelector('#featuresOut');
var section4 = document.querySelector('#featuresIn');

buttonFeatures.addEventListener('click', () => {
  scrollTo(section4);
})

var buttonRequirement = document.querySelector('#requirementsOut');
var section5 = document.querySelector('#requirementsIn');

buttonRequirement.addEventListener('click', () => {
  scrollTo(section5);
})

var buttonQuotes = document.querySelector('#quotesOut');
var section6 = document.querySelector('#quotesIn');

buttonQuotes.addEventListener('click', () => {
  scrollTo(section6);
})
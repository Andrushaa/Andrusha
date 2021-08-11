function scrollTo(element) {
  window.scroll({
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var buttonMain = document.querySelector('#mainOut');
var section1 = document.querySelector('#mainIn');

buttonMain.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section1);
})

var buttonAbout = document.querySelector('#aboutOut');
var section3 = document.querySelector('#aboutIn');

buttonAbout.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section3);
})

var buttonFeatures = document.querySelector('#featuresOut');
var section4 = document.querySelector('#featuresIn');

buttonFeatures.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section4);
})

var buttonRequirement = document.querySelector('#requirementsOut');
var section5 = document.querySelector('#requirementsIn');

buttonRequirement.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section5);
})

var buttonQuotes = document.querySelector('#quotesOut');
var section6 = document.querySelector('#quotesIn');

buttonQuotes.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section6);
})

var theStory = document.querySelector('#storyOut');
var section3 = document.querySelector('#aboutIn');

theStory.addEventListener('click', () => {
  document.body.classList.remove('lockSOS');
  scrollTo(section3);
})





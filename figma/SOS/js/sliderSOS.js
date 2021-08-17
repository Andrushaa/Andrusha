'use strict';

let images = [
  "../SOS/img/img-1.jpg",
  "../SOS/img/img-2.jpg",
  "../SOS/img/img-3.jpg",
  "../SOS/img/img-4.jpg",
  "../SOS/img/img-5.jpg",
];

let imagesOnHtml = document.getElementsByClassName("slider__image");

for (let i = 0; i < imagesOnHtml.length; i++) {
  imagesOnHtml[i].src = images[i % images.length];
}

const numberOfPointSwitchers = 5;
let currentIndex = 0;
let arrowSwitcher = document.getElementsByClassName("slider__switcher")[0];
arrowSwitcher.onclick = () => {
  currentIndex++;

  let previosPointSwitcher = document.getElementsByClassName(
    "point-switcher__item_active"
  )[0];
  previosPointSwitcher.classList.remove("point-switcher__item_active");

  let currentPointSwitcher = document.querySelector(
    `.point-switcher__item[data-value="${
      currentIndex % numberOfPointSwitchers
    }"]`
  );
  currentPointSwitcher.classList.add("point-switcher__item_active");

  for (let i = 0; i < imagesOnHtml.length; i++) {
    imagesOnHtml[i].src = images[(currentIndex + i) % images.length];
  }
};

let pointSwitchers = document.getElementsByClassName("point-switcher__item");

for (let pointSwitcher of pointSwitchers) {
  pointSwitcher.onclick = () => {
    let previosPoint = currentIndex % numberOfPointSwitchers;
    let currentPoint = pointSwitcher.dataset.value;

    if (previosPoint == currentPoint) return;

    let previosPointSwitcher = document.getElementsByClassName(
      "point-switcher__item_active"
    )[0];

    previosPointSwitcher.classList.remove("point-switcher__item_active");
    pointSwitcher.classList.add("point-switcher__item_active");

    currentIndex += currentPoint - previosPoint;
    for (let i = 0; i < imagesOnHtml.length; i++) {
      imagesOnHtml[i].src = images[(currentIndex + i) % images.length];
    }
  };
}

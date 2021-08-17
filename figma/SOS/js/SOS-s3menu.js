'use strict';
const SOSs3menu = document.getElementById("SOS-s3menu");

for (let element of SOSs3menu.children) {
  const title = element.firstElementChild;

  title.onmouseover = () => {
    for (let block of SOSs3menu.children) {
      if (block === element) {
        block.lastElementChild.classList.remove("SOS-S3__hidden");
        block.firstElementChild.classList.add("SOS-S3__active");
      } else {
        block.lastElementChild.classList.add("SOS-S3__hidden");
        block.firstElementChild.classList.remove("SOS-S3__active");
      }
    }
  };
}

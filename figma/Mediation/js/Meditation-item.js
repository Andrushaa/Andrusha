'use strict';

const item = document.getElementById("Meditation-items");

for (let element of item.children) {
  const title = element.firstElementChild;

  title.onmouseover = () => {
    for (let block of item.children) {
      if (block === element) {
        block.firstElementChild.classList.add("Meditation-item__article-active");
      } else {
        block.firstElementChild.classList.remove("Meditation-item__article-active");
      }
    }
  };
}

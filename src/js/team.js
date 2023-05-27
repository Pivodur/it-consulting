const showMore = document.querySelector(".team__button");
const itemsLength = document.querySelectorAll(".team__item").length;

let itemsCount = 4;

showMore.addEventListener("click", () => {
  itemsCount +=4;
  const array = Array.from(document.querySelectorAll(".team__item"));
  const itemsToShow = array.slice(0, itemsCount);

  itemsToShow.forEach( el => {
    el.classList.add("is-visible");
  })

  if (itemsCount === itemsLength) {
    showMore.style.display = "none";
  }
})
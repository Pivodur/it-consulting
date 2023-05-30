// const inputs = document.querySelectorAll(".project-form__input");

// inputs.forEach((el) => {
//   el.addEventListener("input", () => {
//     if (el.nextSibling.className === ".project-form__placeholder") {
//       if (el.value) {
//         el.nextSibling.classList.add("hidden");
//       } else {
//         el.nextSibling.classList.remove("hidden");
//       }
//     }
//   });
// });

const inputs = document.querySelectorAll(".project-form__input");

inputs.forEach((el) => {
  el.addEventListener("input", () => {
    if (el.nextElementSibling && el.nextElementSibling.classList.contains("project-form__placeholder")) {
      if (el.value) {
        el.nextElementSibling.classList.add("hidden");
      } else {
        el.nextElementSibling.classList.remove("hidden");
      }
    }
  });
});




const hamburgers = document.querySelector(".nav-bar__hamburgers");
const list = document.querySelector(".nav-bar__list");
const links = document.querySelectorAll(".nav-bar__link");

hamburgers.addEventListener("click", function () {
  list.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    list.classList.remove("toggle");
  });
});

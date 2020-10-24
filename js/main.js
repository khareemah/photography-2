const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const loader = document.querySelector(".loader");
const ul = document.querySelector(".nav ul");
window.addEventListener("scroll", function() {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
window.addEventListener("load", function() {
  loader.classList.add("loaded");
});
navToggle.addEventListener("click", function() {
  nav.classList.toggle("open");
  navToggle.classList.toggle("open");
});
for (i = 0; i < ul.children.length; i++) {
  if (window.innerWidth < 768) {
    ul.children[i].addEventListener("click", function() {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  }
}

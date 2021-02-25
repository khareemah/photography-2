// remove loader page when page loads
const loader = document.querySelector(".loader");

window.addEventListener("load", function() {
  loader.classList.add("loaded");
});

// nav toggler
const navToggle = document.querySelector(".nav-toggle"),
  nav = document.querySelector(".nav"),
  ul = document.querySelector(".nav ul");

if (window.innerWidth < 768) {
  ul.addEventListener("click", function() {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
  });
}

navToggle.addEventListener("click", function() {
  nav.classList.toggle("open");
  navToggle.classList.toggle("open");
});

// fixed header
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// lightbox
const lightbox = document.querySelector(".lightbox"),
  lightboxImg = document.querySelector(".lightbox-img"),
  lightboxItems = document.querySelectorAll(".work-item-inner"),
  closeBtn = document.querySelector(".close-btn"),
  captionText = document.querySelector(".lightbox-caption"),
  lightboxCounter = document.querySelector(".lightbox-number"),
  nextBtn = document.querySelector(".next"),
  prevBtn = document.querySelector(".prev");

let currentlyselected;
function openModal() {
  lightbox.style.display = "flex";
}

function changeImage() {
  lightboxImg.src = lightboxItems[currentlyselected].querySelector("img").src;
  captionText.innerHTML = lightboxItems[currentlyselected].querySelector(
    ".overlay h2"
  ).innerHTML;
  lightboxCounter.innerHTML = `${currentlyselected + 1} / 6`;
}
function nextImage() {
  currentlyselected++;
  if (currentlyselected === lightboxItems.length) {
    currentlyselected = 0;
  }
  changeImage();
}
function prevImage() {
  if (currentlyselected === 0) {
    currentlyselected = lightboxItems.length;
  }
  currentlyselected--;
  changeImage();
}
function closeModal() {
  lightbox.style.display = "none";
}

for (let i = 0; i < lightboxItems.length; i++) {
  lightboxItems[i].addEventListener("click", function() {
    currentlyselected = i;
    openModal();
    changeImage();
  });
}
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
closeBtn.addEventListener("click", closeModal);
lightbox.addEventListener("click", function(e) {
  if (e.target.classList.contains("lightbox")) {
    closeModal();
  }
});

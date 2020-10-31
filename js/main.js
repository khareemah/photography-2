const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const loader = document.querySelector(".loader");
const ul = document.querySelector(".nav ul");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const allImages = document.querySelectorAll(".work-item-inner img");
const workItems = document.querySelectorAll(".works .work-item-inner");
const closeBtn = document.querySelector(".close-btn");
const captionText = document.querySelector(".lightbox-caption");
const numText = document.querySelector(".lightbox-number");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

for (let i = 0; i < workItems.length; i++) {
  workItems[i].addEventListener("click", function() {
    openModal();
    let imgSrc = this.querySelector("img").src;
    let caption = this.querySelector("img").alt;
    let currentlyselected = i;
    lightboxImg.src = imgSrc;
    captionText.innerHTML = caption;
    numText.innerHTML = `${currentlyselected + 1} / 6`;
    nextBtn.addEventListener("click", function() {
      currentlyselected++;
      if (currentlyselected === allImages.length) currentlyselected = 0;
      lightboxImg.src = allImages[currentlyselected].src;
      captionText.innerHTML = allImages[currentlyselected].alt;
      numText.innerHTML = `${currentlyselected + 1} / 6`;
    });
    prevBtn.addEventListener("click", function() {
      if (currentlyselected === 0) currentlyselected = allImages.length;
      currentlyselected--;
      lightboxImg.src = allImages[currentlyselected].src;
      captionText.innerHTML = allImages[currentlyselected].alt;
      numText.innerHTML = `${currentlyselected + 1} / 6`;
    });
  });
}
closeBtn.addEventListener("click", function() {
  closeModal();
});
lightbox.addEventListener("click", function(e) {
  if (e.target.classList.contains("lightbox")) {
    closeModal();
  }
});

function openModal() {
  lightbox.style.display = "flex";
}
function closeModal() {
  lightbox.style.display = "none";
}
// fixed header
window.addEventListener("scroll", function() {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// remove loader page when page loads
window.addEventListener("load", function() {
  loader.classList.add("loaded");
});

// nav toggle
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

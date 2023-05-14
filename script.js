const menuBtn = document.querySelector(".menuButton");
const closeBtn = document.querySelector(".closeButton");

const navLinks = document.querySelector(".navLinks");

function showNavLinks() {
  navLinks.classList.add("showNavLinks");
  closeBtn.style.display = "flex";
}

function removeNavLinks() {
  navLinks.classList.remove("showNavLinks");
  closeBtn.style.display = "none";
}

menuBtn.addEventListener("click", showNavLinks);

closeBtn.addEventListener("click", removeNavLinks);

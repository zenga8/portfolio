// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => { ul.classList.toggle("show"); });

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => { ul.classList.remove("show"); })
);

// ***** SCROLL TO TOP *****
// Get button:
let icon = document.getElementById("scroll-up");

// When user scrolls down 20px from top of the document, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
}

// When user clicks on the button, scroll to top of document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
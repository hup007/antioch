function myHamburger() {
    let x = document.getElementById("nav-links2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.onscroll = function() {myFunction()};

var sel = document.getElementById("dock");
var sticky = sel.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    sel.classList.add("sticky")
  } else {
    sel.classList.remove("sticky");
  }
}


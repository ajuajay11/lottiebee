// CAROUSEL STARTS/////////////////////////////////////////////////////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// CAROUSEL ENDS///////////////////////////////////////////////////////////////////////////////////


// hamburger starts///////////////////////////////////////////////////////////////////////////////////

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
// hamburger ENDS///////////////////////////////////////////////////////////////////////////////////


// counter starts///////////////////////////////////////////////////////////////////////////////////


const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-value');
        const c = +counter.innerText;

        const increment = target / 10000;

        if(c < target) {
          counter.innerText= `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        }
    }
    updateCounter();
});

// counter ENDS///////////////////////////////////////////////////////////////////////////////////
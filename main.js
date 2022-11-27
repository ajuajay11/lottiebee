// PRODUCT RATE START JS///////////////////////////////////////////////////////////////////////////
const products=[{
  image:'./images/products/1.jpg',
  brand:"lottie",
  productName:"Dandelion pendants 🌿",
  crossRate:290,
  offer:25,
  newBadge: "old",
  url:"https://web.whatsapp.com/",
  filter: "ring"
},
{
  image:'./images/products/2.jpg',
  brand:"lottie",
  productName:"Real flower pendants🌼🌿",
  crossRate:290,
  offer:25,
  newBadge: "old",
  url:"https://web.whatsapp.com/",
  filter: "pendant"

},
{
  image:'./images/products/3.jpg',
  brand:"lottie",
  productName:"Customised family clock ⌛⏱️",
  crossRate:290,
  offer:25,
  newBadge: "new",
  url:"https://web.whatsapp.com/",
  filter: "ring"

},
{
  image:'./images/products/4.jpg',
  brand:"lottie",
  productName:"Resin initial lamp💡",
  crossRate:290,
  offer:25,
  newBadge: "old",
  url:"https://web.whatsapp.com/",
  filter: "pendant"
},
{
  image:'./images/products/6.jpg',
  brand:"lottie",
  productName:"Real flower jewellery 🌼🌿",
  crossRate:290,
  offer:25,
  newBadge: "new",
  url:"https://web.whatsapp.com/"
},
{
  image:'./images/products/5.jpg',
  brand:"lottie",
  productName:"Evil eye pendant and .. 🧿",
  crossRate:290,
  offer:25,
  newBadge: "new",
  url:"https://web.whatsapp.com/"
},
{
  image:'./images/products/7.jpg',
  brand:"lottie",
  productName:"Sun and moon pendant🌞🌚",
  crossRate:290,
  offer:25,
  newBadge: "old",
  url:"https://web.whatsapp.com/"
},
{
  image:'./images/products/9.jpg',
  brand:"lottie",
  productName:"Trippy pendant 🧿✨",
  crossRate:290,
  offer:25,
  newBadge: "new",
  url:"https://web.whatsapp.com/"
}];

let value = "";
var parent=document.getElementById("prduct-page");


products.map((product,index)=>{

value = value + `<div class="subproduct-section">
<div class="p-image">
  <img src=${product.image}>
  <span class="new-prod ${product.newBadge}">New</span>
</div>
<div class="price">
  <div class="p-name">
      <p class="product-made">Lottiebee Product</p>
      <h4 class="product-name"> ${product.productName}</h4>
      <div class="rate">
          <span><del>₹${product.crossRate}</del> &nbsp<span class="og-rate">₹${product.crossRate - (product.offer/100 * product.crossRate)} </span> &nbsp<span class="off">${product.offer}%</span></span>
      </div>    
      <div class="order">
          <button style="font-size:20px" onclick="myFunction(this)" data-index = ${index}> <i class="fa fa-whatsapp" style="font-size:17px;color:rgb(255, 255, 255)" > Shop Now</i></button>
      </div>
  </div>
</div>
</div>`;
parent.innerHTML= value;
});

// PRODUCT RATE ENDS JS///////////////////////////////////////////////////////////////////////////

// popup confirmation yes and no start/////////////////////////////////////////////////////////

function myFunction(element) {
  let index = element.getAttribute("data-index");

  var yesButton=document.getElementById("btn-yes");
  yesButton.setAttribute("href", products[index].url); 
  
  var x = document.getElementById("popup");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  var box = document.getElementById("popup");
  // 👇️ hides element (still takes up space on page)
  box.style.display = "none";
});

// popup confirmation yes and no ends /////////////////////////////////////////////////////////


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


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
function filterSelection(filterValue) {
  // console.log(filterValue);
  const result = products.filter((product)=>{
    return product.filter == filterValue;
  });
  console.log(result);
}
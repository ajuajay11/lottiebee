// PRODUCT RATE START JS///////////////////////////////////////////////////////////////////////////

  /* <div class="subproduct-section">
                <div class="p-image">
                    <img src="./images/attachments (1)/IMG_20220819_162053.jpg" alt="">
                    <span class="new-prod">new</span>
                </div>
                <div class="price">
                    <div class="p-name">
                        <p class="product-made">Lottiebee Product</p>
                        <h4 class="product-name"> Butterfly Pendant 🦋</h4>
                        <div class="rate">
                            <span><del>₹290</del> &nbsp<span class="og-rate">₹249</span> &nbsp<span class="off">25%off</span></span>
                        </div>    
                        <div class="order">
                            <button style="font-size:20px"> <i class="fa fa-whatsapp" style="font-size:17px;color:rgb(255, 255, 255)" onclick="myFunction()"> Shop Now</i></button>
                        </div>
                    </div>
                </div>
            </div> }*/

            const products=[{
              image:'./images/instagram.png',
              brand:"lottie",
              productName:"kewbyufgyulghiowefhuykvb",
              crossRate:290,
              offer:25,
              newBadge: "",
              url:"https://web.whatsapp.com/"
          },
          {
              image:'./images/instagram.png',
              newBadge: "",
              brand:"lottie",
              productName:"lottie222",
              crossRate:290,
              offer: 25,
              url:"https://mazacone.com/"
          },{
            image:'./images/s312.jpg',
            newBadge: "new",
            brand:"lottie",
            productName:"lottie222",
            crossRate:290,
            offer:25,
            url:"https://git.com/"
        },{
          image:"./images/attachments (1)/IMG_20220819_162053.jpg",
          newBadge: "new",
          brand:"lottie",
          productName:"lottie222",
          crossRate:290,
          offer:25
      },{
        image:"./images/attachments (1)/IMG_20220819_162053.jpg",
        newBadge: "new",
        brand:"lottie",
        productName:"lottie222",
        crossRate:290,
        offer:10,
       
    },{
              image:"./images/attachments (1)/IMG_20220819_162053.jpg",
              newBadge: "new",
              brand:"lottie",
              productName:"lottie22223233",
              crossRate:290,
              offer:25
          },{
              image:"./images/attachments (1)/IMG_20220819_162053.jpg",
              brand:"lottie",
              newBadge: "new",
              productName:"lottie22223233",
              crossRate:290,
              offer:25
          },{
              image:"./images/attachments (1)/IMG_20220819_162053.jpg",
              newBadge: "new",
              brand:"lottie",
              productName:"lottie22223233",
              crossRate:290,
              offer:25,
              
          }];

          let x = "";
          console.log(x);
let value = "";
var parent=document.getElementById("prduct-page");

products.map((product,index)=>{

value = value + `<div class="subproduct-section">
<div class="p-image">
  <img src=${product.image}>
  <span class="new-prod">${product.newBadge}</span>
</div>
<div class="price">
  <div class="p-name">
      <p class="product-made">Lottiebee Product</p>
      <h4 class="product-name"> ${product.productName}</h4>
      <div class="rate">
          <span><del>₹${product.crossRate}</del> &nbsp<span class="og-rate">₹${product.crossRate - (product.offer/100 * product.crossRate)} </span> &nbsp<span class="off">${product.offer}%</span></span>
      </div>    
      <div class="order">
          <button style="font-size:20px"> <i class="fa fa-whatsapp" style="font-size:17px;color:rgb(255, 255, 255)" onclick="myFunction(this)" data-index = ${index}> Shop Now</i></button>
      </div>
  </div>
</div>
</div>`;
parent.innerHTML= value


});


      //     var parent=document.getElementById("prduct-page");
      //     parent.innerHTML=`<div class="subproduct-section">
      //     <div class="p-image">
      //         <img src=${product.image}>
      //         <span class="new-prod">new</span>
      //     </div>
      //     <div class="price">
      //         <div class="p-name">
      //             <p class="product-made">Lottiebee Product</p>
      //             <h4 class="product-name"> ${product.productName}</h4>
      //             <div class="rate">
      //                 <span><del>${product.crossRate}</del> &nbsp<span class="og-rate">${product.crossRate - (product.offer/100 * product.crossRate)}</span> &nbsp<span class="off">${product.offer}%</span></span>
      //             </div>    
      //             <div class="order">
      //                 <button style="font-size:20px"> <i class="fa fa-whatsapp" style="font-size:17px;color:rgb(255, 255, 255)" onclick="myFunction()"> Shop Now</i></button>
      //             </div>
      //         </div>
      //     </div>
      // </div> }`;  
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
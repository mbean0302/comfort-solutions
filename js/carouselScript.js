// Carousel Container Variables/Objects //

const carouselContainerDiv = document.getElementById('productCarouselContainer'); // container for carousel
const brandDropdown = document.getElementById('category');
const eqTypeDropdown= document.getElementById('subcategory');
var imageDirectory = document.getElementById('category').value; // current selection of brand
var imageSubDirectory = document.getElementById('subcategory').value; // current selection of equipmentType

// Event Listeners for Drop Downs

brandDropdown.addEventListener("change", function () {
  imageDirectory = document.getElementById('category').value; // update on change
  eqTypeDropdown.addEventListener("change", function () {
    imageSubDirectory = document.getElementById('subcategory').value; // update on change
    // console.log(`Showed ${imageDirectory} -- ${imageSubDirectory} Carousel!`); // test output
    carouselContainerDiv.innerHTML = dynamicCarouselHtmlConstructor();
  });
});


// Variable Initialization

var firstCodeBlock = '';
var secondCodeBlock = '';
var thirdCodeBlock = '';


// Dynamic Carousel Constructor Function

var dynamicCarouselHtmlConstructor = () => {

  firstCodeBlock = `<div class="carousel slide" data-ride="carousel" id="productCarousel">
   <ol class="carousel-indicators">
     `; // first code block regardless of conditionals

  for (let i = 0; i < productsDatabase[imageDirectory][imageSubDirectory].numberOfImages; i++) {
    if (productsDatabase[imageDirectory][imageSubDirectory].numberOfImages === 1) { // if only one image
      secondCodeBlock += `<li class="active" data-slide-to="${i}" data-target="#productCarousel"></li>
   </ol>
   <div class="carousel-inner">
      `;
    }
    if (productsDatabase[imageDirectory][imageSubDirectory].numberOfImages > 1) {  // if more than one image
      if (i === productsDatabase[imageDirectory][imageSubDirectory].numberOfImages - 1) { // last image
        secondCodeBlock += `<li data-slide-to="${i}" data-target="#productCarousel"></li>
   </ol>
   <div class="carousel-inner">
      `;
        break
      }
      if (i === 0) { // first image
        secondCodeBlock += `<li class="active" data-slide-to="${i}" data-target="#productCarousel"></li>
     `
      }
      else { // other images between first and last
        secondCodeBlock += `<li data-slide-to="${i}" data-target="#productCarousel"></li>
     `
      }
    }
  }

  for (let i = 0; i < productsDatabase[imageDirectory][imageSubDirectory].numberOfImages; i++) {
    if (productsDatabase[imageDirectory][imageSubDirectory].numberOfImages === 1) { // if only one image
      thirdCodeBlock += `<div class="carousel-item active">
        <img alt="image${i}" class="d-block w-100" src="carouselImages/${imageDirectory}/${imageSubDirectory}/${'image' + i}.jpg">
      </div>
    <a class="carousel-control-prev" data-slide="prev" href="#productCarousel" role="button">
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" data-slide="next" href="#productCarousel" role="button">
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;
      break;
    }

    if (productsDatabase[imageDirectory][imageSubDirectory].numberOfImages > 1) {  // if more than one image
      if (i === productsDatabase[imageDirectory][imageSubDirectory].numberOfImages - 1) { // last image
        thirdCodeBlock += `<div class="carousel-item">
        <img alt="image${i}" class="d-block w-100" src="carouselImages/${imageDirectory}/${imageSubDirectory}/${'image' + i}.jpg">
      </div>
    <a class="carousel-control-prev" data-slide="prev" href="#productCarousel" role="button">
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" data-slide="next" href="#productCarousel" role="button">
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;
        break
      }
      if (i === 0) { // first image
        thirdCodeBlock += `<div class="carousel-item active">
        <img alt="image${i}" class="d-block w-100" src="carouselImages/${imageDirectory}/${imageSubDirectory}/${'image' + i}.jpg">
      </div>`;
      }
      else { // other images between first and last
        thirdCodeBlock += `<div class="carousel-item">
        <img alt="image${i}" class="d-block w-100" src="carouselImages/${imageDirectory}/${imageSubDirectory}/${'image' + i}.jpg">
      </div>`;
      }
    }
  }

  let dynamicCarouselCode = firstCodeBlock + secondCodeBlock + thirdCodeBlock;
  firstCodeBlock = '';  // to not copy code from last event
  secondCodeBlock = ''; // to not copy code from last event
  thirdCodeBlock = ''; // to not copy code from last event

 return dynamicCarouselCode;
};

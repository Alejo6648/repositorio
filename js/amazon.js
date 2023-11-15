let headerSearchInput = document.getElementById("headerSearchInput");

let mainContent = document.getElementById("main-content");

let boxModal = document.getElementById("boxModal");
headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});

/* mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
}); */


/* x y seleccion de cuadros */

const x = document.querySelector('.close');
const modal = document.querySelector('.box-modal');

x.addEventListener('click', ()=> {
    boxModal.classList.remove("box-modal");
    boxModal.classList.add("box-modal-none");
});

// divs miniatura
const mainImgDiv = document.querySelector('.box-main-img-modal');
const miniDivs = document.querySelectorAll('.main-img, .main-img-2, .main-img-3, .main-img-4');


miniDivs.forEach((miniDiv) => {
 miniDiv.addEventListener('click', () => {
   // Para que cambie el color de borde
   miniDivs.forEach((div) => {
     div.classList.remove('selected');
   });
   // Al color que tenga la clase select 
   miniDiv.classList.add('selected'); 

   const img = miniDiv.querySelector('img');

   // Crea una nueva imagen
   const newImg = document.createElement('img');
   newImg.src = img.src;
   newImg.className = 'img-modal';

   mainImgDiv.innerHTML = '';
   mainImgDiv.appendChild(newImg);

   setTimeout(() => {
     newImg.classList.add('visible');
   }, 0.5);
 });
});

//info principal
const mainImgInfo = document.querySelector('.box-main-img-info');
const miniDivsInfo = document.querySelectorAll('.main-img-info, .main-img-2-info, .main-img-3-info, .main-img-4-info');

miniDivsInfo.forEach((miniDivInfo) => {
 miniDivInfo.addEventListener('click', () => {
   // Para que cambie el color de borde
   miniDivsInfo.forEach((div) => {
     div.classList.remove('selected-info');
   });
 });
});


var images = document.querySelectorAll('.main-img-info img, .main-img-2-info img, .main-img-3-info img, .main-img-4-info img');
var mainImage = document.getElementById('img-wl');

images.forEach(function(image) {
   image.addEventListener('mouseover', function() {
       mainImage.src = this.src;
   });
});

var mainImage = document.getElementById('img-wl');
var modalWindow = document.getElementById('boxModal');
var modalImage = document.querySelector('.img-modal');

mainImage.addEventListener('click', function() {
 modalImage.src = this.src;
 modalWindow.style.display = 'flex';
});
let headerSearchInput = document.getElementById("headerSearchInput");
let mainContent = document.getElementById("main-content");
let mainBarco = document.getElementById("main-barco");
let btnClose = document.getElementById("btnClose");
let header = document.getElementById("header");

/* */
let mainImgModal = document.getElementById("mainImgModal");

let mainImgModal1 = document.getElementById("mainImgModal1");
let mainImgModal2 = document.getElementById("mainImgModal2");
let mainImgModal3 = document.getElementById("mainImgModal3");
let mainImgModal4 = document.getElementById("mainImgModal4");
let mainImgModal5 = document.getElementById("mainImgModal5");

let boxMainImgModal1 = document.getElementById("boxMainImgModal1");
let boxMainImgModal2 = document.getElementById("boxMainImgModal2");
let boxMainImgModal3 = document.getElementById("boxMainImgModal3");
let boxMainImgModal4 = document.getElementById("boxMainImgModal4");
let boxMainImgModal5 = document.getElementById("boxMainImgModal5");

let mainImgModal11 = document.getElementById("mainImgModal11");
let mainImgModal22 = document.getElementById("mainImgModal22");
let mainImgModal33 = document.getElementById("mainImgModal33");
let mainImgModal44 = document.getElementById("mainImgModal44");

let modalt = document.getElementById("modalt");

/* Para el color de la barra de busqueda */
headerSearchInput.addEventListener("click", function() {
  headerSearchInput.classList.add("header-search-input-focus");
  headerSearchInput.classList.remove("header-search-input-no-focus");
});
mainContent.addEventListener("click", () => {
  headerSearchInput.classList.add("header-search-input-no-focus");
  headerSearchInput.classList.remove("header-search-input-focus");
});

/* sirve para ocultar una etiqueta HTML utilizando su ID */
btnClose.addEventListener("click", function() {
  mainContent.style.display = "none";
});

/* Color menú Imagenes Video */
let optionVideos = document.getElementById("optionVideos");
let optionImagenes = document.getElementById("optionImagenes");

optionVideos.addEventListener("click", () => { 
 optionImagenes.classList.remove("option-selected");
 optionVideos.classList.add("option-selected");
});
optionImagenes.addEventListener("click", () => { 
 optionImagenes.classList.add("option-selected");
 optionVideos.classList.remove("option-selected");
});

/* Cuando haga click en el "" se ejucutara el siguiente funcion */

mainImgModal1.addEventListener("click", () => {
 mainImgModal.setAttribute("src", "./img/51ojzJk77qL._SL1500_.jpg");

 boxMainImgModal1.classList.add("box-img-barcos");
 boxMainImgModal2.classList.remove("box-img-barcos");
 boxMainImgModal3.classList.remove("box-img-barcos");
 boxMainImgModal4.classList.remove("box-img-barcos");
 boxMainImgModal5.classList.remove("box-img-barcos");

 mainImgModal1.classList.add("img-barcos-opa");
 mainImgModal2.classList.remove("img-barcos-opa");
 mainImgModal3.classList.remove("img-barcos-opa");
 mainImgModal4.classList.remove("img-barcos-opa");
 mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal2.addEventListener("click", () => {
 mainImgModal.setAttribute("src", "./img/61c937dHIvL._SL1500_.jpg");

 boxMainImgModal1.classList.remove("box-img-barcos");
 boxMainImgModal2.classList.add("box-img-barcos");
 boxMainImgModal3.classList.remove("box-img-barcos");
 boxMainImgModal4.classList.remove("box-img-barcos");
 boxMainImgModal5.classList.remove("box-img-barcos");

 mainImgModal1.classList.remove("img-barcos-opa");
 mainImgModal2.classList.add("img-barcos-opa");
 mainImgModal3.classList.remove("img-barcos-opa");
 mainImgModal4.classList.remove("img-barcos-opa");
 mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal3.addEventListener("click", () => {
 mainImgModal.setAttribute("src", "./img/71ut3JnAiUL._SL1500_.jpg");

 boxMainImgModal1.classList.remove("box-img-barcos");
 boxMainImgModal2.classList.remove("box-img-barcos");
 boxMainImgModal3.classList.add("box-img-barcos");
 boxMainImgModal4.classList.remove("box-img-barcos");
 boxMainImgModal5.classList.remove("box-img-barcos");

 mainImgModal1.classList.remove("img-barcos-opa");
 mainImgModal2.classList.remove("img-barcos-opa");
 mainImgModal3.classList.add("img-barcos-opa");
 mainImgModal4.classList.remove("img-barcos-opa");
 mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal4.addEventListener("click", () => {
 mainImgModal.setAttribute("src", "./img/51b72fFNWRL._SL1500_.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.add("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");
  
  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.add("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});



/* -------------------------------------------------------------- */
/* Alertas al darle click a unos botones */
let comprarAhora = document.getElementById("comprarAhora");
let agregarCarrito = document.getElementById("agregarCarrito");

comprarAhora.addEventListener("click", () => { 
alert("¡Gracias por su compra!");
});
agregarCarrito.addEventListener("click", () => { 
alert("¡Ha sido agregado con éxito!");
});

/* -------------------------------------------------------------- */
/* */


let mainImgModal111 = document.getElementById("mainImgModal111");


/* sirve para ocultar una etiqueta HTML utilizando su ID /  / aqui voy jsjsjsjs */
mainImgModal111.addEventListener("click", function() {
  if (mainContent.style.display === "none") {
  mainContent.style.display = "block"; 
  }
  });

/* -------------------------------------------------------------- */
/* El cambio de la imagen al pasar el cursor por encima y que se mantenga la imagen */
let miniaturas = document.querySelectorAll('.img-mini');

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener('click', () => {

    const imagenPrincipal = document.getElementById('mainImgModal');
    const src = miniatura.getAttribute('src');
    imagenPrincipal.setAttribute('src', src);
    imagenPrincipal.classList.add('enlarge');
    });
});
let containerImg = document.querySelector('.principal-container-img');
let imagenPrincipal = document.getElementById('mainImgModal111');


containerImg.addEventListener('mouseover', (event) => {
  if (event.target && event.target.classList.contains('principal-article')) {
    const src = event.target.querySelector('.img-mini-p').getAttribute('src');
    imagenPrincipal.setAttribute('src', src);

  }
});

/*  */
/*  */

window.onload = () => {
  let modalt = document.getElementById('modalt');
  let mainImgModal111 = document.getElementById('mainImgModal111');
 
  // Al cargar la página, ocultamos el contenedor 1
  modalt.style.display = "none";
 
  // Agregamos un evento de clic al contenedor 2
  mainImgModal111.addEventListener('click', () => {
    // Al hacer clic en el contenedor 2, mostramos el contenedor 1
    modalt.style.display = "block";
  });
 }



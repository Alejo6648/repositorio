let headerSearchInput = document.getElementById("headerSearchInput");
let mainContent = document.getElementById("main-content");
let mainBarco = document.getElementById("main-barco");
let btnClose = document.getElementById("btnClose");
let header = document.getElementById("header");

/*  */
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

  // Al cargar la página, quitamos ciertos estilos del contenedor 1
  modalt.classList.add('quitar-estilo');
  
  // Agregamos un evento de clic al contenedor 2
  mainImgModal111.addEventListener('click', () => {
      // Al hacer clic en el contenedor 2, volvemos a agregar los estilos al contenedor 1
      modalt.classList.remove('quitar-estilo');
  });
}
/*  */
/*  */
/* const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');

let puntuacionGuardada = 0; // Variable para guardar la puntuación actual

document.querySelector('.box-estrellas').addEventListener("mouseover", (e) => {
  const puntuacion = parseFloat(e.target.id.slice(-1)); // Obtener la puntuación del elemento afectado

  // Remover todas las clases existentes
  star1.setAttribute("class", "fa-regular fa-star");
  star2.setAttribute("class", "fa-regular fa-star");
  star3.setAttribute("class", "fa-regular fa-star");
  star4.setAttribute("class", "fa-regular fa-star");
  star5.setAttribute("class", "fa-regular fa-star");

  if (puntuacion >= 0 && puntuacion <= 0.2) {
    // No se establece ninguna estrella
  } else if (puntuacion > 0.2 && puntuacion <= 0.7) {
    star1.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacion > 0.8 && puntuacion <= 1.2) {
    star1.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacion > 1.3 && puntuacion <= 1.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacion > 1.8 && puntuacion <= 2.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacion > 2.3 && puntuacion <= 2.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacion > 2.8 && puntuacion <= 3.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacion > 3.3 && puntuacion <= 3.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacion > 3.8 && puntuacion <= 4.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacion > 4.3 && puntuacion <= 4.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
    star5.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacion >= 4.8 && puntuacion <= 5) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
    star5.setAttribute("class", "fa-solid fa-star");
  }

  puntuacionGuardada = puntuacion; // Guardar la puntuación actual
});

document.querySelector('.box-estrellas').addEventListener("mouseout", () => {
  // Restaurar las estrellas a la puntuación guardada
  if (puntuacionGuardada >= 0 && puntuacionGuardada <= 0.2) {
    // No se establece ninguna estrella
  } else if (puntuacionGuardada > 0.2 && puntuacionGuardada <= 0.7) {
    star1.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacionGuardada > 0.8 && puntuacionGuardada <= 1.2) {
    star1.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacionGuardada > 1.3 && puntuacionGuardada <= 1.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacionGuardada > 1.8 && puntuacionGuardada <= 2.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacionGuardada > 2.3 && puntuacionGuardada <= 2.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacionGuardada > 2.8 && puntuacionGuardada <= 3.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacionGuardada > 3.3 && puntuacionGuardada <= 3.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacionGuardada > 3.8 && puntuacionGuardada <= 4.2) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
  } else if (puntuacionGuardada > 4.3 && puntuacionGuardada <= 4.7) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
    star5.setAttribute("class", "fa-solid fa-star-half-alt");
  } else if (puntuacionGuardada >= 4.8 && puntuacionGuardada <= 5) {
    star1.setAttribute("class", "fa-solid fa-star");
    star2.setAttribute("class", "fa-solid fa-star");
    star3.setAttribute("class", "fa-solid fa-star");
    star4.setAttribute("class", "fa-solid fa-star");
    star5.setAttribute("class", "fa-solid fa-star");
  }
}); */
const stars = Array.from({length: 5}, (_, i) => document.getElementById(`star${i+1}.0`));

let puntuacionGuardada = 0;

document.querySelector('.box-estrellas').addEventListener("mouseover", (e) => {
  const puntuacion = parseFloat(e.target.id.slice(4));
  stars.forEach((star, i) => {
    if (puntuacion > i + 0.7) star.setAttribute("class", "fa-solid fa-star");
    else if (puntuacion > i + 0.2) star.setAttribute("class", "fa-solid fa-star-half-alt");
    else star.setAttribute("class", "fa-regular fa-star");
  });
  puntuacionGuardada = puntuacion;
});

document.querySelector('.box-estrellas').addEventListener("mouseout", () => {
  stars.forEach((star, i) => {
    if (puntuacionGuardada > i + 0.7) star.setAttribute("class", "fa-solid fa-star");
    else if (puntuacionGuardada > i + 0.2) star.setAttribute("class", "fa-solid fa-star-half-alt");
    else star.setAttribute("class", "fa-regular fa-star");
  });
});
/*   <i class="fa-solid fa-star-half-alt">Media estrella</i>  */
/* <i class="fa-regular fa-star">Vacia estrella</i> */
/* <i class="fa-solid fa-star">Llena estrella</i> */
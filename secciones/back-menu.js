//BACK MENÚ, SE UBICA DENTRO DEL HEADER - Generamos un div con un menú que se modifica desde acá en todas las páginas.

let contenedorBack = document.querySelector(".contenedor-back"); //Seleccionamos el div donde vamos a introducir

const divCreadoBack = document.createElement("div"); //Creamos el div a introducir
            
const contenidoAutoGeneradoContenedorBack = //Generamos el contenido del div. Las `` siguientes se utilizan para hacer un html literal
                `
                
                <a class="back" href="javascript:history.back()">←</a>

                <!-- Comienza Menú hamburguesa para móvil -->

                <div class="container-menu">

                    <div class="contenedor-menu-movil">

                    <div id="bars-menu" class="bars-menu">
                        <span class="line1-bars-menu"></span>
                        <span class="line2-bars-menu"></span>
                        <span class="line3-bars-menu"></span>
                    </div>

                    </div>
            
                    <nav id="nav" class="main-nav">
                        <div class="nav-links">
                        <a class="link-item" href="https://gonzaviaja.com/">Home</a>
                        <a class="link-item" href="https://gonzaviaja.com/secciones/tips/tips-de-viajes.html">Tips de viajes</a>
                        <a class="link-item" href="https://gonzaviaja.com/secciones/euroviaje/euro-viaje-2023.html">Euroviaje Lowcost 2023</a>
                        <a class="link-item" href="https://gonzaviaja.com/secciones/contenido-exclusivo/contenido-exclusivo.html">Contenido exclusivo</a>
                        <a class="link-item" href="https://www.instagram.com/gonzaviaja/"><p class="instagram-nombre">Instagram</p><i class="icono-insta fa-brands fa-instagram"></i></a>
                        </div>
                    </nav>
            
                </div>

                <!-- Finaliza Menú hamburguesa para móvil -->
               
               
                `; 

divCreadoBack.innerHTML = contenidoAutoGeneradoContenedorBack; //Le atribuimos el html al div.

contenedorBack.append(divCreadoBack); //Se lo adjudicamos a la sección autogenerada 0

/*Menú hamburguesa para móvil*/

document.querySelector(".bars-menu").addEventListener("click", animateBars) /*Seleecionamos sobre qué vamos a trabajar y le añadimos que al hacer click
se realice la acción que nombramos "animateBars"*/

var line1 = document.querySelector(".line1-bars-menu"); /*Indicamos que la variante line1 sea igual al elemento con la clase ".line1-bars-menu" del CSS*/
var line2 = document.querySelector(".line2-bars-menu");
var line3 = document.querySelector(".line3-bars-menu");


function animateBars(){
    line1.classList.toggle("active-line1-bars-menu");
    line2.classList.toggle("active-line2-bars-menu");
    line3.classList.toggle("active-line3-bars-menu");
     
}

const toggleButton = document.getElementById("bars-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

document.querySelector("nav").addEventListener("click", animateBarsCLOSE) 

function animateBarsCLOSE(){
    navWrapper.classList.toggle("show");
    line1.classList.toggle("active-line1-bars-menu");
    line2.classList.toggle("active-line2-bars-menu");
    line3.classList.toggle("active-line3-bars-menu");
     
}


navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

//BACK MENÚ, SE UBICA DENTRO DEL HEADER - Generamos un div con un menú que se modifica desde acá en todas las páginas.

let contenedorBack = document.querySelector(".contenedor-back"); //Seleccionamos el div donde vamos a introducir

const divCreadoBack = document.createElement("div"); //Creamos el div a introducir
            
const contenidoAutoGeneradoContenedorBack = //Generamos el contenido del div. Las `` siguientes se utilizan para hacer un html literal
                `
                
                <a class="back" href="javascript:history.back()">←</a>
                <a class="nombre-home" href="https://gonzaviaja.com/"><i class="fa-solid fa-house icono-menu"></i></a>
               
               
                `; 

divCreadoBack.innerHTML = contenidoAutoGeneradoContenedorBack; //Le atribuimos el html al div.

contenedorBack.append(divCreadoBack); //Se lo adjudicamos a la sección autogenerada 0
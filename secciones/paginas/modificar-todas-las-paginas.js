//SECTION AUTOGENERADA 0 (MENÚ) - Generamos un div con un menú que se modifica desde acá en todas las páginas.

let sectionAutogenerada0 = document.querySelector(".section-autogenerador-0"); //Seleccionamos el div donde vamos a introducir

const divCreado0 = document.createElement("div"); //Creamos el div a introducir
            
const contenidoAutoGenerado0 = //Generamos el contenido del div. Las `` siguientes se utilizan para hacer un html literal
                `
                <a class="back" href="javascript:history.back()">←</a>
                
                <div class="contenedor-menu">
                    <div class="menu">
                        <a class="elemento-menu" href="../../../index.html"><i class="fa-solid fa-house icono-menu"></i></a>
                        <a class="elemento-menu" href="https://www.instagram.com/gonzaviaja/"><i class="fa-brands fa-instagram icono-menu"></i></a>
                    </div>
                </div>
                `; 

divCreado0.innerHTML = contenidoAutoGenerado0; //Le atribuimos el html al div.

sectionAutogenerada0.append(divCreado0); //Se lo adjudicamos a la sección autogenerada 0
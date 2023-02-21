
//BLOG Y NOVEDADES

//Este javascript muestra en la página principal, en el blog y la página euroviaje 2023, contenido en forma de botones.

//IMPORTANTE: Agregar las nuevas notas en la parte superior del objeto porque sino en las páginas donde muestra la sección levanta la más antigua primero.

const notasBlogYNovedades = {
    
    "nota4":[
        {
            "titulo": "El problema del Caribe",

            "bajada": "La información es el tesoro más preciado a la hora de realizar un viaje. Este escrito nace como respuesta a los bloggers, instagramers y cadenas hoteleras que se encargan de ocultar información de destinos para que no disminuya el turismo. <br> ¿Hay sargazo en el Caribe?",

            "origen": "blog",

            "url": "problema-del-caribe.html",

            "foto": "problema-caribe.jpg",

            "visibilidad": "blog, paginaprincipal",

            "destacada": "no",

            "autor": "Gonzalo Volpe Gómez"
        }
    ],

    "nota3":[
        {
            "titulo": "Maldivas Lowcost",

            "bajada": "Con ustedes la guía sobre Maafushi, la isla que va a hacer posible tu viaje lowcost al paraíso de Maldivas.",

            "origen": "paginas",

            "url": "maldivas/maafushi.html",

            "foto": "maafushi-1-min.jpg",

            "visibilidad": "paginaprincipal",

            "destacada": "no",

            "autor": "Gonzalo Volpe Gómez"
        }
    ],

    "nota2":[
        {
            "titulo": "Ilha Grande",

            "bajada": "Un mismo viaje contado por dos personas que todavía no se conocían. Conoce la visión de Deborah Oliva sobre Ilha Grande.",

            "origen": "blog",

            "url": "ilhagrande-deborah-oliva.html",

            "foto": "ilha-grande-portada-01.jpg",

            "visibilidad": "blog, paginaprincipal",

            "destacada": "no",

            "autor": "Deborah Oliva"
        }
    ],

    "nota1":[
        {
            "titulo": "¿Por qué el mar?",

            "bajada": "¿Por qué el mar? ¿Qué nos hace sentir? Una revisión profunda de la infancia y el contacto con algo que amo pero que todavía no logro comprender.",

            "origen": "blog",

            "url": "porque-el-mar.html",

            "foto": "porqueelmar-portada.jpg",

            "visibilidad": "blog, paginaprincipal",

            "destacada": "no",

            "autor": "Gonzalo Volpe Gómez"
        }
    ],

    "todas":[
        {
            "titulo": "Blog",

            "bajada": "Conoce todos los textos del blog.",

            "origen": "blog",

            "url": "blog.html",

            "foto": "blog.jpg",

            "visibilidad": "europalowcost, paginaprincipal",

            "destacada": "no",

            "autor": "Gonzalo Volpe Gómez y otros"
        }
    ],

}

function mostrarNotas(a, b, c) {

    let tituloNota = ""
    let bajadaNota = ""
    let urlNota = ""
    let fotoNota = ""
    let autorNota = ""
    let rutaFoto = ""
    let rutaUrl = ""
    let contenedorNotas = document.querySelector(".contenedor-todas-las-notas");

        for (prop in a){
            
            tituloNota = (a[prop][0].titulo);
            bajadaNota = (a[prop][0].bajada);
            urlNota = (a[prop][0].url);
            fotoNota = (a[prop][0].foto);
            autorNota = (a[prop][0].autor);

            //Condicionales para crear las rutas desde cada página. EJ: Para levantar las fotos o url, no es lo mismo estar en la página index.html, que en la del Euroviaje o el Blog, cada uno necesita una url específica para encontrar el archivo.

            if (a[prop][0].origen == "blog" & b == "blog"){
                rutaFoto = "images/"
                rutaUrl = "entradas/"
            }

            if (a[prop][0].origen == "paginas" & b == "blog"){
                rutaFoto = "../paginas/images/"
                rutaUrl = "../paginas/"
            }

            if (a[prop][0].origen == "blog" & b == "paginaprincipal"){
                rutaFoto = "secciones/blog/images/"
                rutaUrl = "secciones/blog/entradas/"

                if (a[prop][0].url == "blog.html"){ /*Código exlusivo para el botón que ofrece leer todas las entradas del blog*/
                    rutaUrl = "secciones/blog/"
                }
            }

            if (a[prop][0].origen == "paginas" & b == "paginaprincipal"){
                rutaFoto = "secciones/paginas/images/"
                rutaUrl = "secciones/paginas/"
            }

            if (a[prop][0].origen == "blog" & b == "europalowcost"){
                rutaFoto = "../blog/images/"
                rutaUrl = "../blog/entradas/"

                if (a[prop][0].url == "blog.html"){
                    rutaUrl = "../blog/" /*Código exlusivo para el botón que ofrece leer todas las entradas del blog*/
                }
            }

            if (a[prop][0].origen == "paginas" & b == "europalowcost"){
                rutaFoto = "../paginas/images/"
                rutaUrl = "../paginas/"
            }

            //Función que genera el texto.

            if (contenedorNotas.dataset.identificadortipodepagina == b){

                if (a[prop][0].visibilidad.includes(b)){

                    const divAutogenerado = document.createElement("div");
                    const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                    `
                    <div class="contenedor-nota-individual" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${rutaFoto}${fotoNota});">

                        <h2 class="titulo-nota">${tituloNota}</h2>

                        <p class="autor-nota">Por ${autorNota}</p>

                        <p class="bajada-nota">${bajadaNota}</p>

                        <a class="boton-leer-mas" href="${rutaUrl}${urlNota}">Leer</a>
                    
                    </div>
                    `
                    ; 

                    divAutogenerado.innerHTML = contenidoAutoGenerado;

                contenedorNotas.append(divAutogenerado);
                }

            }
        }   

}

//Ejecutamos la función pasando como argumentos el objeto "notasBlogYNovedades" y el identificador del tipo de página. El identificador del tipo de página se encuentra en los html, en el div con clase ".contenedor-todas-las-notas"

mostrarNotas(notasBlogYNovedades, "paginaprincipal");
mostrarNotas(notasBlogYNovedades, "europalowcost");
mostrarNotas(notasBlogYNovedades, "blog");





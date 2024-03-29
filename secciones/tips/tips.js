// 1) DATOS DE LOS CONTINENTES

const america = {
    
    "brasil":[
        {
            "nombre": "Brasil",

            "url": "paginas-paises/brasil.html",

            "imagenBandera": "images/brasil-bandera-02.webp",
            
            "imagenDestino": "images/brasil-02.webp",
        }
    ],

    "mexico":[
        {
            "nombre": "México",

            "url": "paginas-paises/mexico.html",

            "imagenBandera": "images/mexico-bandera-02.webp",
            
            "imagenDestino": "images/mexico-02.webp",
        }
    ],

    "colombia":[
        {
            "nombre": "Colombia",

            "url": "paginas-paises/colombia.html",

            "imagenBandera": "images/colombia-bandera-02.webp",
            
            "imagenDestino": "images/colombia-02.webp",
        }
    ],

    "argentina":[
        {
            "nombre": "Argentina",

            "url": "paginas-paises/argentina.html",

            "imagenBandera": "images/argentina-bandera-02.webp",
            
            "imagenDestino": "images/argentina-02.webp",
        }
    ],

    "uruguay":[
        {
            "nombre": "Uruguay",

            "url": "paginas-paises/uruguay.html",

            "imagenBandera": "images/uruguay-bandera-02.webp",
            
            "imagenDestino": "images/uruguay-02.webp",
        }
    ],

    "panama":[
        {
            "nombre": "Panamá",

            "url": "paginas-paises/panama.html",

            "imagenBandera": "images/panama-bandera-02.webp",
            
            "imagenDestino": "images/panama-02.webp",
        }
    ],

}

const asia = {
    
    "maldivas":[
        {
            "nombre": "Maldivas",

            "url": "paginas-paises/maldivas.html",

            "imagenBandera": "images/maldivas-bandera-02.webp",
            
            "imagenDestino": "images/maldivas-02.webp",
        }
    ],

    "tailandia":[
        {
            "nombre": "Tailandia",

            "url": "paginas-paises/tailandia.html",

            "imagenBandera": "images/tailandia-bandera-02.webp",
            
            "imagenDestino": "images/tailandia-02.webp",
        }
    ],

    "malasia":[
        {
            "nombre": "Malasia",

            "url": "paginas-paises/malasia.html",

            "imagenBandera": "images/malasia-bandera-02.webp",
            
            "imagenDestino": "images/malasia-02.webp",
        }
    ],


}

const europa = {
    
    "espana":[
        {
            "nombre": "España",

            "url": "paginas-paises/espana.html",

            "imagenBandera": "images/espana-bandera-02.webp",
            
            "imagenDestino": "images/espana-02.webp",
        }
    ],
}

const africa = {
    
    "NO HAY PAÍS AÚN":[
        {
            "nombre": "No hay país aún en África",

            "url": "",

            "imagenBandera": "",
            
            "imagenDestino": "",
        }
    ],

    "NO HAY PAÍS AÚN":[
        {
            "nombre": "No hay país aún en África",

            "url": "",

            "imagenBandera": "",
            
            "imagenDestino": "",
        }
    ],


}

const oceania = {
    
    "NO HAY PAÍS AÚN":[
        {
            "nombre": "No hay país aún en Oceanía",

            "url": "",

            "imagenBandera": "",
            
            "imagenDestino": "",
        }
    ],

    "NO HAY PAÍS AÚN":[
        {
            "nombre": "No hay país aún en Oceanía",

            "url": "",

            "imagenBandera": "",
            
            "imagenDestino": "",
        }
    ],


}
// 2) FUNCIÓN QUE MUESTRA LOS PAÍSES (Esta función se ejecuta para que aparezca la información al iniciar la página. Luego, la función "clicnEnBotonContinente" permite el filtrado por continente).

function mostrarPaisesDelContinenteElegido(a){

    //Función que muestra los países del continente seleccionado

    let imagenBandera = "";
    let imagenDestino = "";
    let urlPaginaPais = "";
    let nombrePais = "";

    let bloquerAutogenerador = document.querySelector(".bloque-autogenerador");

    for (prop in a){

        let imagenBandera = (a[prop][0].imagenBandera);
        let imagenDestino = (a[prop][0].imagenDestino);
        let urlPaginaPais = (a[prop][0].url);
        let nombrePais = (a[prop][0].nombre);

        const elementoAutoGenerado = document.createElement("a");

        const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                `
                <a href="${urlPaginaPais}" class="contenedor-autogenerado" style="background-image: url(${imagenDestino})">
      
                    <img class="bandera" src=${imagenBandera} alt="Bandera país">
                    <p class="nombre-pais">${nombrePais}</p>
                    <span class="barra-pais"></span>

                </a>

                `; 

        elementoAutoGenerado.innerHTML = contenidoAutoGenerado;

        bloquerAutogenerador.append(elementoAutoGenerado);

            }

 }

 //Ejecutamos la función con todos los continentes (los comentados son porque todavía no los visité)

mostrarPaisesDelContinenteElegido(asia)
mostrarPaisesDelContinenteElegido(america);
mostrarPaisesDelContinenteElegido(europa);
//  mostrarPaisesDelContinenteElegido(africa)
//  mostrarPaisesDelContinenteElegido(oceania);


// 3) FUNCIÓN QUE PERMITE FILTRAR POR CONTINENTE (A la función le pasamos el parámetro "a" y luego la ejecutamos con todos los continentes. Esto es para que sea reutilizable la función). Los botones permiten el filtrado, es decir, muestra solamente los que corresponden al continente elegido.

function clickEnBotonContinente (a) {

    let continenteElegido = document.querySelector(a);

    continenteElegido.addEventListener("click", function() {

        let bloquerAutogenerador = document.querySelector(".bloque-autogenerador"); //Seleccionas el bloque donde se genera el HTML de los países.
        bloquerAutogenerador.innerHTML=""; //Limpiamos la información preexistente del bloque. (Esto es para que no se repita información).

        //Los dataset.nombrecontinente están en el HTML

        if (continenteElegido.dataset.nombrecontinente == "america"){
            mostrarPaisesDelContinenteElegido(america)
        }

        if (continenteElegido.dataset.nombrecontinente == "europa"){
            mostrarPaisesDelContinenteElegido(europa)
        }

        if (continenteElegido.dataset.nombrecontinente == "asia"){
            mostrarPaisesDelContinenteElegido(asia)
        }

        if (continenteElegido.dataset.nombrecontinente == "todos"){

            mostrarPaisesDelContinenteElegido(asia)
            mostrarPaisesDelContinenteElegido(america)
            mostrarPaisesDelContinenteElegido(europa);
            // mostrarPaisesDelContinenteElegido(africa)
            // mostrarPaisesDelContinenteElegido(oceania);

        }

        //Los continentes de abajo todavía no los visité, para activarlos, hay que agregar info al objeto con el nombre del continente y a su vez, hay que habilitar para que se vean los botones mediante el css "styles-tips.css" cambiando el display:none de las clases "africa" y "oceania". También hay que modificar el condicional anterior "continenteElegido.dataset.nombrecontinente == "todos"", ejecutando las funciones por los nuevos continentes. Por último, hay que ejecutar las funciones del punto 2 con los continentes agregados.

        if (continenteElegido.dataset.nombrecontinente == "africa"){
            mostrarPaisesDelContinenteElegido(africa)
        }

        if (continenteElegido.dataset.nombrecontinente == "oceania"){
            mostrarPaisesDelContinenteElegido(oceania)
        }

    });

}

//Ejecutamos la función con todos los continentes

clickEnBotonContinente(".america")
clickEnBotonContinente(".asia")
clickEnBotonContinente(".europa")
clickEnBotonContinente(".todos")
// clickEnBotonContinente(".africa") NO ESTÁ EN USO TODAVÍA
// clickEnBotonContinente(".oceania") NO ESTÁ EN USO TODAVÍA
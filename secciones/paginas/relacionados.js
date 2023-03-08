//Este archivo contiene tres apartados, el primero es de DATOS, el segundo apartado de RELACIONADOS y el tercer apartado de MOSTRADOR DE DESTINOS POR PAÍS y RECOMENDACIONES EN LA HOME. El primero, son los datos que permiten el funcionamiento, el segundo sirve para las páginas de destinos donde se muestran los relacionados en el final y el tercero sirve para mostrar todos los destinos de un país en las páginas de países y en las recomendaciones de la home.

//APARTADO 1: DATOS 

//Creamos objetos por cada país para poder relacionar todos los textos de esos países entre si y también para poder usarlos en las páginas de los países

//Los tipos de destinos pueden ser: "Playa", "Ciudad", "Histórico", "Surf", "Vida nocturna", "Fauna marina", "Gastronomía", "Montaña"

const brasil = {
    
    "rio-de-janeiro":[
        {
            "nombre": "Río de Janeiro (BRA)",

            "url": "rio-de-janeiro.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Ciudad",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "ilha-grande":[
        {
            "nombre": "Ilha Grande (BRA)",

            "url": "ilha-grande.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "parati":[
        {
            "nombre": "Parati (BRA)",

            "url": "parati.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Histórico",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
        }
    ],

    "ilhabela-sao-sebastiao":[
        {
            "nombre": "Ilhabela y São Sebastião (BRA)",

            "url": "ilhabela-sao-sebastiao.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "ubatuba":[
        {
            "nombre": "Ubatuba (BRA)",

            "url": "ubatuba.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Surf",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "maresias-ilha-das-couves":[
        {
            "nombre": "Maresías e Ilha Das Couves (BRA)",

            "url": "maresias-ilha-das-couves.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "arraial-do-cabo":[
        {
            "nombre": "Arraial do Cabo (BRA)",

            "url": "arraial-do-cabo.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "buzios":[
        {
            "nombre": "Buzios (BRA)",

            "url": "buzios.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const colombia = {
    
    "san-andres":[
        {
            "nombre": "San Andrés (COL)",

            "url": "san-andres.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "providencia":[
        {
            "nombre": "Providencia (COL)",

            "url": "providencia.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const tailandia = {
    
    "bangkok":[
        {
            "nombre": "Bangkok (THA)",

            "url": "bangkok.html",

            "tipoDestinoPrimario": "Ciudad",

            "tipoDestinoSecundario": "Vida nocturna",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "phi-phi-island":[
        {
            "nombre": "Phi Phi Island (THA)",

            "url": "phi-phi-island.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Vida nocturna",

            "tipoDestinoTerciario": "Snorkel y buceo",

            "tipoDestinoCuaternario": "",

        }
    ],

    "phuket":[
        {
            "nombre": "Phuket (THA)",

            "url": "phuket.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Vida nocturna",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const panama = {
    
    "ciudad-de-panama":[
        {
            "nombre": "Ciudad de Panamá (PAN)",

            "url": "ciudad-de-panama.html",

            "tipoDestinoPrimario": "Ciudad",

            "tipoDestinoSecundario": "Vida nocturna",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "san-blas":[
        {
            "nombre": "Guna Yala / San Blas (PAN)",

            "url": "san-blas.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "portobelo":[
        {
            "nombre": "Portobelo (PAN)",

            "url": "portobelo.html",

            "tipoDestinoPrimario": "Histórico",

            "tipoDestinoSecundario": "Playa",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ]

    ,

    "isla-contadora":[
        {
            "nombre": "Isla Contadora (PAN)",

            "url": "isla-contadora.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",

        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const argentina = {
    
    "patagonia":[
        {
            "nombre": "Patagonia (ARG)",

            "url": "patagonia.html",

            "tipoDestinoPrimario": "Montaña",

            "tipoDestinoSecundario": "Playa",

            "tipoDestinoTerciario": "Gastronomía",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const mexico = {
    
    "tulum":[
        {
            "nombre": "Tulum (MEX)",

            "url": "tulum.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Histórico",

            "tipoDestinoTerciario": "Snorkel y buceo",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "playa-del-carmen":[
        {
            "nombre": "Playa del Carmen (MEX)",

            "url": "playa-del-carmen.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Vida nocturna",

            "tipoDestinoTerciario": "Gastronomía",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "isla-mujeres":[
        {
            "nombre": "Isla Mujeres (MEX)",

            "url": "isla-mujeres.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "akumal":[
        {
            "nombre": "Akumal (MEX)",

            "url": "akumal.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const malasia = {
    
    "islas-perhentian":[
        {
            "nombre": "Perhentian Islands (MYS)",

            "url": "islas-perhentian.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]

}

const maldivas = {
    
    "maafushi":[
        {
            "nombre": "Maafushi Island (MDV)",

            "url": "maafushi.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "vaadhoo-island-y-male":[
        {
            "nombre": "Vaadhoo Island y Malé (MDV)",

            "url": "vaadhoo-island-y-male.html",

            "tipoDestinoPrimario": "Playa",

            "tipoDestinoSecundario": "Snorkel y buceo",

            "tipoDestinoTerciario": "",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]
}

const uruguay = {
    
    "colonia-del-sacramento":[
        {
            "nombre": "Colonia del Sacramento (URY)",

            "url": "colonia-del-sacramento.html",

            "tipoDestinoPrimario": "Histórico",

            "tipoDestinoSecundario": "Gastronomía",

            "tipoDestinoTerciario": "Playa",

            "tipoDestinoCuaternario": "",
            
        }
    ],

    "todos":[
        {
            "nombre": "Otros destinos",

            "url": "../../tips/tips-de-viajes.html",
        }
    ]
}


//APARTADO 2: Relacionados

// Creamos una función que recorre los objetos y reconoce a los destinos de un mismo país generando botones que permiten ir al siguiente destino relacionado. IMPORTANTE: En los HTMLS colocamos un dataset identficador de país que permite que el javascript imprima los destinos relacionados solo en las páginas de destinos pertenecientes a ese país.

//FUNCIÓN

function relacionados(a, b){

    let nombreDestino = ""
    let urlDestino = ""
    let contenedorRelacionados = document.querySelectorAll(".contenedor-relacionados"); //Usamos un selector ALL, para que si en alguna página hay dos div con la clase ".contenedor-relacionados" no de error

    contenedorRelacionados.forEach(element => { //Con el foreach recorremos el array que surge del querySelectorAll y a cada uno le indicamos que ejecute la función según el "identificadorpais"

        if (element.dataset.identificadorpais == b){ //Validamos el país de la página actual.
    
            for (prop in a){

                if (prop != element.dataset.identificadordestino){ //Validamos el destino de  la página actual así no lo mostramos como relacionado.
                
                nombreDestino = (a[prop][0].nombre);
                urlDestino = (a[prop][0].url);

                const linkAutogenerado = document.createElement("a");
                const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                    `
                    <a class="caja-relacionados" href="${urlDestino}">
                        <p class="caja-titulo">${nombreDestino}</p>
                    </a>
                    `; 

                linkAutogenerado.innerHTML = contenidoAutoGenerado;

                element.append(linkAutogenerado);

                }
            }

        }
    });

}

//EJECUCIÓN DE FUNCIONES CON DISTINTOS ARGUMENTOS. HAY QUE PASARLE DOS ARGUMENTOS, 1 ES EL OBJETO CON LOS DATOS QUE TIENE EL NOMBRE DEL PAÍS Y EL 2, ES UN STRING CON EL NOMBRE DEL IDENTIFICADOR DE PAÍS ESTABLECIDO EN EL HTML.

relacionados(brasil, "brasil");
relacionados(colombia, "colombia");
relacionados(tailandia, "tailandia");
relacionados(panama, "panama");
relacionados(argentina, "argentina");
relacionados(mexico, "mexico");
relacionados(malasia, "malasia");
relacionados(maldivas, "maldivas");
relacionados(uruguay, "uruguay");

//APARTADO 3: Mostrador destinos de cada país en página de país y en recomendados de cada país de la home

//Creamos una función con un foreach que recorre todos los contenedores que tienen la clase ".contenedor-relacionados", luego chequea el "indentificadorpais2" que tiene ese contenedor y le adjudica lo que corresponde a ese país desde el objeto. 

//COMPLICACIÓN: Es importante mantener la variable "contenedorRelacionados" que llame al elemento con clase ".contenedor-relacionados" en este apartado y en el otro, ya que si le cambiamos el nombre, va a dar error en algunos htmls. ¿Por qué? Porque si tenemos varios htmls y en alguno el contenedor en vez de tener la clase ".contenedor-relacionados" tiene otra, va a decir que no encuentra el elemento y va dar error.

function mostradorDestinosCadaPais(a, b){

    let nombreDestino = ""
    let urlDestino = ""
    let contenedorRelacionados = document.querySelectorAll(".contenedor-relacionados"); //Usamos un selector ALL, porque en la home hay más de un contenedor con la clase ".contenedor-relacionados"

    contenedorRelacionados.forEach(element => { //Con el foreach recorremos el array que surge del querySelectorAll y a cada uno le indicamos que ejecute la función según el "identificadorpais2"

        if (element.dataset.identificadorpais2 == b){ //Con este condicional evitamos que aparezca en el listado los botones de destinos de otros países.

            for (prop in a){

                let url = ""

                if(element.dataset.identificadortipodepagina == "pais"){
                    
                    url = "../../paginas"
                }

                if(element.dataset.identificadortipodepagina == "home"){
                    
                    url = "secciones/paginas"
                }
    
                if (element.dataset.identificadortipodepagina == "pais" || element.dataset.identificadortipodepagina == "home"){

                    if (prop != "todos" & prop != "america" & prop != "europa" & prop != "africa" & prop != "oceania"){ //Con este condicional evitamos que aparezca en el listado los botones de destinos que no son exclusivamente del país.)
                
                        nombreDestino = (a[prop][0].nombre);
                        urlDestino = (a[prop][0].url);
            
                        const linkAutogenerado = document.createElement("a");
                        const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal
                            `
                            <a class="caja-relacionados" href="${url}/${b}/${urlDestino}">
                                <p>${nombreDestino}</p>
                            </a>
                            `; 
            
                        linkAutogenerado.innerHTML = contenidoAutoGenerado;
            
                        element.append(linkAutogenerado);
    
                    }
                }  
            }
    
        }
    });

}

//EJECUCIÓN DE FUNCIONES CON DISTINTOS ARGUMENTOS. HAY QUE PASARLE EL NOMBRE DEL OBJETO, ES DECIR DEL PAÍS

mostradorDestinosCadaPais(brasil, "brasil")
mostradorDestinosCadaPais(colombia, "colombia")
mostradorDestinosCadaPais(tailandia, "tailandia")
mostradorDestinosCadaPais(panama, "panama")
mostradorDestinosCadaPais(argentina, "argentina")
mostradorDestinosCadaPais(mexico, "mexico")
mostradorDestinosCadaPais(malasia, "malasia")
mostradorDestinosCadaPais(maldivas, "maldivas")
mostradorDestinosCadaPais(uruguay, "uruguay")


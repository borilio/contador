//Código JavaScript

//Nos aseguramos de no iniciar la función inicio hasta que el DOM esté totalmente cargado
if ("addEventListener" in document) {
    document.addEventListener("DOMContentLoaded", inicio);
} else{
    alert("Necesito un navegador más moderno para funcionar correctamente. Por favor actualízalo.");
}


//Empieza el código Javascript
function inicio(){
    //Primero iniciamos los eventos
    iniciaEventos();

    //Inicia el código...
    console.log("Código JS inicializado correctamente...");
    //TODO Empezar aquí el código...

}

//Aquí es donde le inicializamos los eventos a los elementos HTML
function iniciaEventos(){
    console.log("Asignamos funciones a eventos...")
    //Nos traemos los elementos HTML que necesitemos y le asignamos las funciones que queramos
}

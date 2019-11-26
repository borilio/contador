//Código JavaScript

function calcular(){
    //*****************************************
    //**** Configuración del contador *********
    //*****************************************
    //
    var limiteDia = 2;
    var limiteMes = 12
    var limiteAno = 2019;
    var limiteHora = 23;
    var limiteMinuto = 59;
    var limiteReal = true; //Indica si la cuenta atrás será real (Ej: Si quedan 23 días, saldrán los 23 días en el contador)
    var parcialMax = 7;    //Indica el tiempo máximo en días que se mostrará en el contador de días (se reseteará cuando llegue a 0)
    //*****************************************
    //*****************************************
    //*****************************************
     //Empezamos a calcular...
    var fechaLimite = {};
    var fechaActual = {};
    var inicializarFecha = "" + limiteMes + "/" + limiteDia + "/" + limiteAno + " " + limiteHora + ":" + limiteMinuto;
    fechaLimite= new Date(inicializarFecha);
    fechaActual = new Date();
    var tiempo = fechaLimite - fechaActual;

    //Actualizamos el HTML
    //Config
    //TODO borrar esto, sólo debug
    var actual = document.querySelector("#actual");
    var limite = document.querySelector("#limite");
    var real = document.querySelector("#real");
    var intervalo = document.querySelector("#intervalo");

    actual.innerHTML = fechaActual;
    limite.innerHTML = inicializarFecha;
    real.innerHTML = limiteReal;
    intervalo.innerHTML = parcialMax;

    //Chrono
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;

    var dias = document.querySelector("#dias");
    var horas = document.querySelector("#horas");
    var minutos = document.querySelector("#minutos");
    var segundos = document.querySelector("#segundos");

    dias.innerHTML = Math.floor(tiempo / d);
    horas.innerHTML = Math.floor((tiempo % d) / h);
    minutos.innerHTML = Math.floor((tiempo % h) / m);
    segundos.innerHTML = Math.floor((tiempo % m) / s);

}

function inicio(){
    //Ahora repetimos el calcular cada segundos...
    var actualizar = setInterval(calcular,1000);
}

//Nos aseguramos de no iniciar la función inicio hasta que el DOM esté totalmente cargado
if ("addEventListener" in document) {
    document.addEventListener("DOMContentLoaded", inicio);
} else{
    alert("Necesito un navegador más moderno para funcionar correctamente. Por favor actualízalo.");
}

let indice=0;
let puntaje=0;
let vidas=3;
let respuestas = [ document.getElementById("opcion_1"),document.getElementById("opcion_2"),document.getElementById("opcion_3"),document.getElementById("opcion_4")];
cargarPregunta(indice);
//funcion para guardar el nombre
function guardarNombre() {
    let nombre = document.getElementById('nombre').value;
    document.getElementById('jugador').innerHTML = nombre;
    document.getElementById('jugador1').innerHTML = nombre;
    document.getElementById('jugador2').innerHTML = nombre;
    document.getElementById('modal3').classList.add('d-none');
}
//funcion para agregar la pregunta en la interfaz
function cargarPregunta(index) {
    objetoPregunta = basePreguntas[index];
    opciones = [...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);
    //codigo para enviar aleatoriamente las opciones
    for (let i = 0; i < 4; i++) {
    opciones.sort(()=> Math.random() -0.5)
    }
    document.getElementById("vida").innerHTML = vidas;
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion_1").innerHTML = opciones[0]
    document.getElementById("opcion_2").innerHTML = opciones[1]
    document.getElementById("opcion_3").innerHTML = opciones[2]
    document.getElementById("opcion_4").innerHTML = opciones[3]
}
//funcion para validar la respuesta
function opcionSeleccionada(index) {
    let opcionRespuesta = opciones[index] == objetoPregunta.respuesta ;
    indice++;
    if (opcionRespuesta) {
        puntaje+=100;
        respuestas[index].classList.add('acierto');
        for(const opcion of respuestas){
            opcion.classList.add('not-active');
        }
    }else {
        respuestas[index].classList.add('desacierto');
        vidas--
        for(const opcion of respuestas){
            opcion.classList.add('not-active');
        }
    }
    if(indice>=basePreguntas.length  ){
        document.getElementById('modal2').classList.remove('d-none');
        document.getElementById("puntaje2").innerHTML = puntaje;
       indice=0;
        vidas=3;
    }else if(vidas==0){
    document.getElementById('modal1').classList.remove('d-none');
    document.getElementById("puntaje").innerHTML = puntaje;
    }
    setTimeout(() => {
        recarga()
    }, 1500);
    
}
function recarga(){
    for(const opcion of respuestas){
    opcion.classList.add('opcion');
    opcion.classList.remove('acierto');
    opcion.classList.remove('desacierto');
    opcion.classList.remove('not-active');
    //document.getElementById('modal1').classList.add('perdio');
    //document.getElementById('modal2').classList.add('termino');
    
    }
   cargarPregunta(indice);
}

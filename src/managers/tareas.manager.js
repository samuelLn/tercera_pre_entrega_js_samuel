// importa el creador tarea
import {crearTarea} from "../models/tareas.model"
// importa el ellemento input para conseguir dato
import htmlElements from "../elements/html.elements";
// imnportamos boton creado 
import {crearBoton} from '../elements/buttom.element.js';
//importa tarjeta
import {creaTarjeta} from '../elements/buttom.element.js';
//importa input
import {CreainpuEditar} from '../elements/buttom.element.js';
//importa input
import {CreaDivInput} from '../elements/buttom.element.js';


// arrays tareas que se va creando
let tareas = JSON.parse(localStorage.getItem("tareas")) || []; // parsear transfoma un json a formato array js
//console.log(tareas);
// funciones para las acciones de las tareas


// mostrar tareas
const mostrarTareas = (tareas) => {
// borramos todos los elementos que tenga el contenedor    
htmlElements.tareaContenedor.innerHTML = "";
console.log(tareas);

// recorre array tareas
tareas.forEach(tarea => {
// por cada tarea crea un div con la siguente clases

//+==========//TARJETA TAREA============================================================================+
// Variable data agrega la data con backstick*/
let contenHtmlInner = `
<div class="contentInputDatos">
<p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data}</p> 
</div>  
<div class="contentInputDatos">
<p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data2}</p> 
</div>  
<div class="contentInputDatos">
<p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data3}</p> 
</div>

 
`;
// fUNCION PARA CREAR LA TARJETA GENERAL    
let tarjeta = creaTarjeta(contenHtmlInner, `${tarea.id}`, "d-flex", "mt-3", "justify-content-between", "align-items-center", "border", "border-2", "rounded-2", "p-3");

//+=======================================================================================+


//+==========//Div input============================================================================+
let contentDivInput = CreaDivInput("ContentIput", "edit", "oculto");
tarjeta.appendChild(contentDivInput);
//+=======================================================================================+




//+==========//input editar 1============================================================================+
let inputUno = CreainpuEditar(`${tarea.id}` + "1a", "text", "editarClass");
//let contentInpueditar = document.getElementById("editDatos");
contentDivInput.appendChild(inputUno); // //AGREGA EL INPUT EN CONTENEDOR INPUT TARJETA
//+=======================================================================================+


//+==========//input editar 2============================================================================+
let inputDos = CreainpuEditar(`${tarea.id}` + "2b", "text", "editarClass");
//let contentInpueditar = document.getElementById("editDatos");
contentDivInput.appendChild(inputDos); // //AGREGA EL INPUT EN CONTENEDOR INPUT TARJETA
//+=======================================================================================+


//+==========//input editar 2============================================================================+
let inputTres = CreainpuEditar(`${tarea.id}` + "3c", "text", "editarClass");
//let contentInpueditar = document.getElementById("editDatos");
contentDivInput.appendChild(inputTres); // //AGREGA EL INPUT EN CONTENEDOR INPUT TARJETA
//+=======================================================================================+




// conten botones
    let btnContenedor = document.createElement("div");
    
    //BOTON ELIMINAR
    //lLamanos a la fucnion crear botn y agregamos los parametros (boton eliminar)
    let btnEliminar = crearBoton("Eliminar Tarea", "btn", "btn-danger", "ms-2"); // funcion que crea boton eliminar con sus parametros nombre y clases
    //+=======================================================================================+
    btnContenedor.appendChild(btnEliminar); // agregamos el boton al contenedor
    btnEliminar.onclick = () => eliminarTareas(tarea.id); // ejecuta la funcion eleminar tarea
    //+=======================================================================================+

    
    //BOTON REALIZADO
    //lLamanos a la fucnion crear botn y agregamos los parametros (boton realizar)
    let btnRealizado = crearBoton(`${tarea.realizado ? "Cancelar" : "Realizado"}`, "btn", `${tarea.realizado ? "btn-warning" : "btn-success"}`, "ms-2"); // funcion que crea boton eliminar con sus parametros nombre y clases
    //+=======================================================================================+
    btnRealizado.onclick = () => cambiarEstadoTareas(tarea.id);
    btnContenedor.appendChild(btnRealizado); // agregamos el boton al contenedor
    //+=======================================================================================+


   // INICIA BOTON EDITAR
    //lLamanos a la fucnion crear botn y agregamos los parametros (boton realizar)
    let btnEditar = crearBoton("Editar", "btn", "ms-2", "bg-primary", "text-white"); // funcion que crea boton eliminar con sus parametros nombre y clases
    //`${tarea.editado ? "Actulizar" : "Editar"}`,
    //`${tarea.editado ? "btn-success" : "bg-primary"}`
    //+=======================================================================================+
    btnEditar.onclick = () => editarTareasIncio (tarea.id);
    btnContenedor.appendChild(btnEditar); // agregamos el boton al contenedor
    //+=======================================================================================+
   

    // INICIA BOTON ACTULIZAR
    //lLamanos a la fucnion crear botn y agregamos los parametros (boton realizar)
    let btnActulizar = crearBoton("Actulizar", "btn", "ms-2", "btn-warning", "text-white", "oculto"); // funcion que crea boton eliminar con sus parametros nombre y clases
    //+=======================================================================================+
    btnActulizar.onclick = () => actulizarValor (tarea.id);
    btnContenedor.appendChild(btnActulizar); // agregamos el boton al contenedor
    //+=======================================================================================+
   
   
   
   
   
   
   
    tarjeta.appendChild(btnContenedor); // AGREGADO EL CONTEDOR DE BOTON DENTRO DE LA TARJETA
    
 //+=======================================================================================+
      
    //AGREGA LA TARJETA CREADA EN EL CONTENEDOR PRINCIAL
    htmlElements.tareaContenedor.appendChild(tarjeta);
    //AGREGA EL INPUT EN CONTENEDOR INPUT TARJETA
    //tarjeta.appendChild(CreaDivInput); 
});

}

// agregar tarea
const agregarTareas = () => {
//event.preventDefault();
// obtiene el valor del input rellena esos argumentos
let tareaNueva = crearTarea(htmlElements.inputTarea.value, htmlElements.inputTareaDos.value, htmlElements.inputTareaTres.value); // aqui se vana agregando los nuevos datos

tareas.push(tareaNueva);
localStorage.setItem("tareas", JSON.stringify(tareas)); // agreagmos a local storage un JSON
console.log(tareas);
mostrarTareas(tareas); //Actuliza y muestra la tarea

}


//cambiar estado de tareas
const cambiarEstadoTareas = (idTarea) => {
// Busacamos el indece de la tarea dentro nuestro array
let index = tareas.findIndex(tarea => tarea.id === idTarea );
// modificamos el valor de folse a true o true a folse (valor booleno)
tareas[index].realizado = !tareas[index].realizado;
//modificado el estado de la tarea modificamos el local storage del array 
localStorage.setItem("tareas", JSON.stringify(tareas));
mostrarTareas(tareas);
}




// Eliminiar tarea
// debe recivir el id de la tarea a eliminar
const eliminarTareas = (idTarea) => {
tareas = tareas.filter(tarea => tarea.id !== idTarea); // filtra la tarea que no concida con el id recivido
localStorage.setItem("tareas", JSON.stringify(tareas)); // en este funcion actulizamos el local storege la nueva array
mostrarTareas(tareas); // muestra nuevo array

}


//------------------------------------------------------------------------+  

// INICIA EDITAR TAREAS
const editarTareasIncio = (idTarea) => {
  // identifica la poscion del la tarjeta 
  let indexEdit = tareas.findIndex(tarea => tarea.id === idTarea );
  
// camabia el texto de data 1
//tareas[indexEdit].data = valorInput;
//tareas[indexEdit].data = "otro";
  
  // modificamos el valor de folse a true o true a folse inicia la fase de edicion
  tareas[indexEdit].editado = !tareas[indexEdit].editado;
  
  // pushea el cambio de  valor en local STORAGE de editado 
  localStorage.setItem("tareas", JSON.stringify(tareas));
  // muesdtra el cambio al apretar el boton editar
  mostrarTareas(tareas); // muestra las tareas
  
  console.log(indexEdit); //muestra el indice la tarjeta 
  console.log(tareas[indexEdit].editado); //Muestra el indice del listado 
  console.log(tareas[indexEdit].id); // muestra el id de la tarjeta
  

//------------------------------------------------------------------------+  

  // obtine el id de la tarjeta actual 
const obtenIdTarjetaActual = document.getElementById(tareas[indexEdit].id);

// obtiene el elemento html hijo del contendor unput editar
obtenIdTarjetaActual.style.background ="#e2e2e28f";
const hijoEdit = obtenIdTarjetaActual.childNodes[7];

//remueve el estilo oculto y agrega el estuilo activo del contedor de los put ocultos
hijoEdit.classList.remove("oculto");
hijoEdit.classList.add("activo"); 




// remueve la clase ocultar del boton actulizar
const obtenBotonActulizarOculto = obtenIdTarjetaActual.childNodes[8].childNodes[3];
obtenBotonActulizarOculto.classList.remove("oculto");

// agrega la clase oculto al boton editar
const obtenBotonEditarActual= obtenIdTarjetaActual.childNodes[8].childNodes[2];
obtenBotonEditarActual.classList.add("oculto");








// Condición del evento al hacer clic en el botón: mostrar el botón actualizar cuando clickea en la tarjeta actual
if (tareas[indexEdit].id === tareas[indexEdit].id) {


  // cotiene el grupo de input activo
  let obtenInputActivosedit = document.querySelector('.edit.activo');
  obtenInputActivosedit.style.opacity =".5"; 


/*let inputEditarUnovalorActual1 = obtenInputActivosedit.childNodes[0].value = "Editar";
let inputEditarUnovalorActual2 = obtenInputActivosedit.childNodes[1].value = "Editar";
let inputEditarUnovalorActual3 = obtenInputActivosedit.childNodes[2].value = "Editar";*/


  // ontiene lo valores actules de los input 
  let datoUnputuno = obtenIdTarjetaActual.childNodes[1].childNodes[1].textContent;
  let datoUnputDos = obtenIdTarjetaActual.childNodes[3].childNodes[1].textContent;
  let datoUnputTres = obtenIdTarjetaActual.childNodes[5].childNodes[1].textContent;
  console.log ("inicia tarea edit " + datoUnputuno + " " + datoUnputDos + " " + datoUnputTres);

//imnprime el valor de los input actules en los input actualesgit
let inputEditarUnovalorActual1 = obtenInputActivosedit.childNodes[0].value = datoUnputuno;
let inputEditarUnovalorActual2 = obtenInputActivosedit.childNodes[1].value = datoUnputDos;
let inputEditarUnovalorActual3 = obtenInputActivosedit.childNodes[2].value = datoUnputTres;

}







  }




//ACTULIZAR DATOS CAPTURA DATOS
const actulizarValor = (idTarea) => {

// identifica la poscion del la tarjeta 
let indexEditActulizar = tareas.findIndex(tarea => tarea.id === idTarea );
// obtine el id de la tarjeta actual 
console.log("Realizada la Actulizacion " + indexEditActulizar); //muestra el indice la tarjeta ACTULIZAR

// modificamos el valor de folse a true o true a folse inicia la fase de edicion
tareas[indexEditActulizar].editado = !tareas[indexEditActulizar].editado;
// pushea el cambio de  valor en local STORAGE de editado 
localStorage.setItem("tareas", JSON.stringify(tareas));



console.log("Realizada la Actulizacion " + tareas[indexEditActulizar].editado); //Muestra el indice del listado ACTULIZAR
console.log("Realizada la Actulizacion " + tareas[indexEditActulizar].id); // Muestra el id de la tarjeta ACTULIZAR





//===========Captura los valores de las tarjetas ================================================+

if (tareas[indexEditActulizar].id === tareas[indexEditActulizar].id) {

  console.log("Este es un id: " + tareas[indexEditActulizar].id);

  // Obtén el elemento <div> por su clase
  const divElement = document.querySelector('.edit.activo');

  // Obtén todos los elementos <input> dentro del <div>
  const inputElements = divElement.querySelectorAll('input');

  // Obtén los valores de los IDs de los inputs
  const ids = Array.from(inputElements).map(input => input.id);

  // Muestra los valores de los IDs en la consola
  console.log(ids);

  // Recorre el array.from de los elementos htm
  if (ids.length >= 3) {

      // Obtén los elementos por sus IDs específicos
      const obtenIdInputEdit1 = document.getElementById(ids[0]);
      const obtenIdInputEdit2 = document.getElementById(ids[1]);
      const obtenIdInputEdit3 = document.getElementById(ids[2]);

      // Accede a los valores de los inputs por sus IDs y realiza el procesamiento necesario
      const valorDatoUno = obtenIdInputEdit1.value;
      tareas[indexEditActulizar].data = valorDatoUno; // camabia los vlares de la data

      const valorDatoDos = obtenIdInputEdit2.value;
      tareas[indexEditActulizar].data2 = valorDatoDos;

      const valorDatoTres = obtenIdInputEdit3.value;
      tareas[indexEditActulizar].data3 = valorDatoTres;

      // Comprueba los datos impresos por console log
      console.log(valorDatoUno + " " + valorDatoDos + " " + valorDatoTres);
  }


}
mostrarTareas(tareas);

}








//const obteEditInput = document.getElementById("editDatos");






//filtro tareas
const filtrarTareas = (estadoTarea) => { // recibe estado tarea true/false realizada o no realizada

  if(estadoTarea === "Realizadas") { // esta comparacion la obtiene del value del select del DOM
    let tareasFiltradas = tareas.filter(tarea => tarea.realizado === true); // FILTRA todas las tareas que marca un estado true/ realizado true
    mostrarTareas(tareasFiltradas); // Muestra una copia de las tareas filtradas
  }else if (estadoTarea === "noRealizadas") {
    let tareasFiltradas = tareas.filter(tarea => tarea.realizado === false);
    mostrarTareas(tareasFiltradas);
  } else{
   mostrarTareas(tareas);
   
  }

}



// exportar tarea con un alias
export default {
tareas,    
mostrarTareas,
agregarTareas,
cambiarEstadoTareas,
eliminarTareas,
filtrarTareas

}





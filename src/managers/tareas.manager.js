// importa el creador tarea
import {crearTarea} from "../models/tareas.model"
// importa el ellemento input para conseguir dato
import htmlElements from "../elements/html.elements";

// arrays tareas que se va creando
let tareas = JSON.parse(localStorage.getItem("tareas")) || []; // parsear transfoma un json a formato array js
//console.log(tareas);
// funciones para las acciones de las tareas


// mostrar tareas
const mostrarTareas = () => {
// borramos todos los elementos que tenga el contenedor    
htmlElements.tareaContenedor.innerHTML = "";
console.log(tareas);

// recorre array tareas
tareas.forEach(tarea => {
    // por cada tarea crea un div con la siguente clases
    let tarjeta = document.createElement("div");
    tarjeta.className = "d-flex mt-3 justify-content-between align-items-center border border-2 rounded-2 p-3";
    tarjeta.innerHTML = `<p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data}</p>
                         <p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data2}</p>
                         <p class="${tarea.realizado ? "text-decoration-line-through" : "aling-self-end"}">${tarea.data3}</p>
                         `; // data agrega la data con backstick
    // conten botones
    let btnContenedor = document.createElement("div");
    
    //boton eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar"; // agregamos texto al btn eliminAR
    btnEliminar.className = "bnt btn-danger ms-2"; // aGREGAMOS LA CLASE
    btnContenedor.appendChild(btnEliminar); // agregamos el boton al contenedor
    //Agregamos evento al btn creado
    btnEliminar.onclick = () => eliminarTareas(tarea.id); // ejecuta la funcion eleminar tarea


    //boton REALIZADO
    let btnRealizado = document.createElement("button");
    btnRealizado.innerText = "Realizado"; // agregamos texto al btn realizado
    btnRealizado.className = "bnt btn-success ms-2"; // aGREGAMOS LA CLASE
    // agregar evento realizado
    btnRealizado.onclick = () => cambiarEstadoTareas(tarea.id);
    btnContenedor.appendChild(btnRealizado); // agregamos el boton al contenedor
   
   
   tarjeta.appendChild(btnContenedor); // AGRAGADO EL CONTEDOR DE BOTON DENTRO DEW LA TARJETA
    
    //Agrega el elemento div en el contenedor
    htmlElements.tareaContenedor.appendChild(tarjeta);
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
mostrarTareas(); //Actuliza y muestra la tarea

}


//cambiar estado de tareas
const cambiarEstadoTareas = (idTarea) => {
// Busacamos el indece de la tarea dentro nuestro array
let index = tareas.findIndex(tarea => tarea.id === idTarea );
// modificamos el valor de folse a true o true a folse (valor booleno)
tareas[index].realizado = !tareas[index].realizado;
//modificado el estado de la tarea modificamos el local storage del array 
localStorage.setItem("tareas", JSON.stringify(tareas));
mostrarTareas();
}




// eliminiar tarea
// debe recivir el id de la tarea a eliminar
const eliminarTareas = (idTarea) => {
tareas = tareas.filter(tarea => tarea.id !== idTarea); // filtra la tarea que no concida con el id recivido
localStorage.setItem("tareas", JSON.stringify(tareas)); // en este funcion actulizamos el local storege la nueva array
mostrarTareas(); // muestra nuevo array

}

// exportar tarea con un alias
export default {
mostrarTareas,
agregarTareas,
cambiarEstadoTareas,
eliminarTareas

}
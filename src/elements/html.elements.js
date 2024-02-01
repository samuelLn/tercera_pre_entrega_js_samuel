
// obtine los elementos html para las entradas de datos
let formTarea = document.querySelector("#formTareas");
let inputTarea = document.querySelector("#inputTarea");
let inputTareaDos = document.querySelector("#inputTareaDos"); // agregue un input adicinal
let inputTareaTres = document.querySelector("#inputTareatres"); // agregue un input adicinal
let tareaContenedor = document.querySelector("#tareasContenedor");

// trae id select
let filtrot = document.querySelector("#filtroT");

// exporta elemento id html
export default {
    formTarea,
    inputTarea,
    inputTareaDos, // agregue un input adicinal
    inputTareaTres,
    tareaContenedor,
    filtrot
}
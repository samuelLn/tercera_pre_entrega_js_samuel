

// esportacion por alias elementos html
import htmlElements from "./elements/html.elements";
// importa tareas
import tareasManager from "./managers/tareas.manager";


// importa alias
export function saludoInicial() {
    // Ejecutamos aplicacion 
    //console.log(htmlElements.tareaContenedor);
    console.log("Ejecutamos aplicacion desde apps");
    // ejecuta agregar tarea
    htmlElements.formTarea.onsubmit = (event) => {
        // con este detenemos la recarga del sitio
        event.preventDefault();
        //funcion agregar tarea
        tareasManager.agregarTareas();
    }
   
   tareasManager.mostrarTareas();

}





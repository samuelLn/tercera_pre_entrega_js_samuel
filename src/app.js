

// esportacion por alias elementos html
import htmlElements from "./elements/html.elements";
// importa tareas
import tareasManager from "./managers/tareas.manager";


// importa alias
export function iniciaApp() { // saludoInicial iniciaApp
    // Ejecutamos aplicacion 
    //console.log(htmlElements.tareaContenedor);
   
    console.log("Ejecutamos aplicacion desde apps");
    
    // ejecuta agregar tarea
    htmlElements.formTarea.onsubmit = (event) => {
        
        // con este detenemos la recarga del sitio que se genera por defecto enb el boton submint
        event.preventDefault();
        
        //funcion agregar tarea
        tareasManager.agregarTareas();



    }
   

  // Evento que identifica el value del select   
   tareasManager.mostrarTareas(tareasManager.tareas);
  htmlElements.filtrot.onchange = () => {
    console.log(htmlElements.filtrot.value);
    tareasManager.filtrarTareas(htmlElements.filtrot.value);
  }

}





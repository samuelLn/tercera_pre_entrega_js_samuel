// funcion crea la tarea se debe agregar el argumeto texto (texto) para imprimir la data del input
export const crearTarea = (texto) => {
let nuevaTarea = {
    id:Date.now().toString(36), // genera un id remdon
    data:texto, // trae el dato del input
    realizado: false // estado de la tarea sin realizar con booleno
}
return nuevaTarea;
}




// clase que tarea y que genera un id con el metodo de la fecha
/*export class tarea {
constructor(texto){ this.id = Date.now().toString(36),
  this.data = texto;
  this.realisado = false;
}

 }*/
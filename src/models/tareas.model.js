// funcion crea la tarea se debe agregar el argumeto texto (texto) para imprimir la data del input
export const crearTarea = (texto, texto2, texto3) => { // agregue un input adicinal
let nuevaTarea = {
    id:Date.now().toString(36), // genera un id remdon
    data:texto, // trae el dato del input
    data2:texto2, // trae el dato del input dos
    data3:texto3, // trae el dato del input tres
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
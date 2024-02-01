//+==========//BOTONES CRUD============================================================================+
// crea botones  en el DOM
export const crearBoton = (texto, ...estilos) => { // se utiliza operador ress para agregar un array de estilos
    let button = document.createElement("button");
    button.innerText = texto;
    button.classList.add(...estilos)

    return button;
}


//+==========//TARJETA TAREA============================================================================+
// Crear tarjeta en DOM
export const creaTarjeta = (contentItemDatos, id, ...estilosTarjeta) => { // se utiliza operador ress para agregar un array de estilos
    let tarjetaTarea = document.createElement("div");
    //tarjetaTarea.setAttribute
    tarjetaTarea.innerHTML = contentItemDatos;
    tarjetaTarea.classList.add(...estilosTarjeta);

    // Agregar el atributo id
    tarjetaTarea.setAttribute("id", id);
    return tarjetaTarea;
  };




  //+==========//INPUT EDITAR============================================================================+


  export const CreainpuEditar = (idinput, tipo, ...estilosInpu) => { // se utiliza operador ress para agregar un array de estilos
    let inputEditar = document.createElement("input");
    //input.setAttribute
    inputEditar.setAttribute("type", tipo);
    inputEditar.classList.add(...estilosInpu);
    // Agregar el atributo id
    inputEditar.setAttribute("id", idinput);
    return inputEditar;
  };


  //+==========//GENERA DIV CONTENT INPUT============================================================================+

  export const CreaDivInput = (idinputDiv, ...estilosInpuDiv) => { // se utiliza operador ress para agregar un array de estilos
    let inputDiv = document.createElement("div");
    //input.setAttribute
    inputDiv.classList.add(...estilosInpuDiv);
    // Agregar el atributo id
    inputDiv.setAttribute("id", idinputDiv);
    return inputDiv;
  };
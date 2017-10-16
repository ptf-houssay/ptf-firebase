firebase
  .database()
  .ref("/productos/")
  .on("child_added", function(data) {
    console.log(data);
    var producto = data.val().producto; // Obtenemos el dato en la key producto
    var cantidad = data.val().cantidad; // Obtenemos el dato en la key cantidad
    var local = data.val().local; // Obtenemos el dato en la key local
    var img = data.val().img; // Obtenemos el dato en la key img

    // Formateamos un li basico para añadir al HTML
    var HTML = `
        <li class="prod">
          <div id='${data.key}'>
            <img src="${img}" alt="imagen producto"/>
            <h1>${producto}</h1>
            <h2>${local}</h2>
            <span>${cantidad}</span> 
          </div>
        </li>
        `;

    var listado = document.querySelector(".productos ul");
    var contenidoAnterior = listado.innerHTML;
    // Añadimos el li al HTML en '.productos ul'
    listado.innerHTML = contenidoAnterior + HTML;
  });

// Cuando se borra un registro de la base...
firebase
  .database()
  .ref("/productos/")
  .on("child_removed", function(data) {
    // Sacamos el li del HTML
    document.getElementById(data.key).parentElement.removeChild();
  });

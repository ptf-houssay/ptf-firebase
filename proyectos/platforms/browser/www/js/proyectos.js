function mostarIntegrantes(listado) {
  return listado.reduce(
    (prev, curr) => prev + `<li class="integrante">${curr}</li>`
  );
}

firebase
  .database()
  .ref("/proyectos/")
  .on("child_added", function(data) {
    console.log(data.val());
    var proyecto = data.val();

    var HTML = `
      <li class="proyecto" id='${data.key}'>
        <div>
          <span class="nombre-proyecto">${proyecto.nombre}</span>
          <p>Integrantes:</p>
          <ul class="integrantes">
          ${proyecto.integrantes
            ? mostarIntegrantes(proyecto.integrantes)
            : "no fue indicado ningun integrante"}
          </ul>
        </div>
      </li>
      `;

    var listado = document.getElementById("listado-proyectos");
    var contenidoAnterior = listado.innerHTML;
    // Añadimos el li al HTML en '.proyectos ul'
    listado.innerHTML = contenidoAnterior + HTML;
  });

// Cuando se borra un registro de la base...
firebase
  .database()
  .ref("/proyectos/")
  .on("child_removed", function(data) {
    // Sacamos el li del HTML
    document.getElementById(data.key).parentElement.removeChild();
  });

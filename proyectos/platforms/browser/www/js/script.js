function datosForm() {
  var nombreDelProyecto = document.getElementById("nombre").value;
  var integrantes = document.getElementById("integrantes").value;
  var tecnologias = document.getElementById("tecnologias").value;
  console.log(nombreDelProyecto, integrantes, tecnologias);
  guardarProyecto(nombreDelProyecto, integrantes, tecnologias);
}

function guardarProyecto(nombre, integrantes, tech) {
  var newProductKey = firebase
    .database()
    .ref()
    .child("proyectos")
    .push().key;

  var integrantesArray = integrantes.split(",");
  var tecnologiasArray = tech.split(",");

  firebase
    .database()
    .ref(`proyectos/${newProductKey}`)
    .set({
      nombre: nombre,
      integrantes: integrantesArray,
      tecnologias: tecnologiasArray
    });

  //window.location.href = "/";
}

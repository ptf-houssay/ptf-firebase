function enviar(producto, cantidad, local, img) {
  var newProductKey = firebase
    .database()
    .ref()
    .child("productos")
    .push().key;

  firebase
    .database()
    .ref("productos/" + newProductKey)
    .set({
      producto: producto,
      cantidad: cantidad,
      local: local,
      img: img
    });
}

var boton = document.getElementById("boton");
if (boton) {
  boton.addEventListener("click", function() {
    var prod = document.getElementById("prod").value; // Obtenemos el valor ingresado en #prod
    var cant = document.getElementById("cant").value; // Obtenemos el valor ingresado en #cant
    var loc = document.getElementById("loc").value; // Obtenemos el valor ingresado en #loc
    var img = document.getElementById("img").value; // Obtenemos el valor ingresado en #img
    console.log(prod, cant, loc, img);
    enviar(prod, cant, loc, img);
  });
}

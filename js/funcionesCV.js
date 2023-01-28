let clientHeight = document.getElementById('mail').clientHeight;
const idNombre = document.querySelectorAll("[id='nombre']");
const liNombre = idNombre[1];
const liNacimiento = document.querySelector("#nacimiento");
const liPais = document.querySelector("#pais");
const liCiudad = document.querySelector("#ciudad");
const liCelular = document.querySelector("#celular");
const liTelefono = document.querySelector("#telefono");
const liMail = document.querySelector("#mail");
const liCalle = document.querySelector("#calle");
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function (data) {
    // console.log(data);
    // console.log(data.results[0]);

    let nombreCompleto = data.results[0].name.first + " " + data.results[0].name.last;
    let foto = data.results[0].picture.large;
    let nacimiento = data.results[0].dob.date;
    let pais = data.results[0].location.country;
    let ciudad = data.results[0].location.city;

    let cel = data.results[0].cell;
    let telfono = data.results[0].phone;
    let mail = data.results[0].email;
    let calle = data.results[0].location.street.name + " - " + data.results[0].location.street.number;
    nacimiento = nacimiento.substring(0, 10);

    let fechaOrdenada = nacimiento.split("-");
    fechaOrdenada = fechaOrdenada[2] + "-" + fechaOrdenada[1] + "-" + fechaOrdenada[0];

    let elms = document.querySelectorAll("[id='nombre']");
    for (var i = 0; i < idNombre.length; i++)
      idNombre[i].innerHTML = nombreCompleto;

    document.getElementById('foto').src = foto;
    document.getElementById('nacimiento').innerHTML = fechaOrdenada;
    document.getElementById('pais').innerHTML = pais;
    document.getElementById('ciudad').innerHTML = ciudad;

    document.getElementById('celular').innerHTML = cel;
    document.getElementById('telefono').innerHTML = telfono;
    document.getElementById('mail').innerHTML = mail;
    document.getElementById('calle').innerHTML = calle;

  }
});
function scrollToTargetAdjusted(id) {

  var element = document.getElementById(id);
  var headerOffset = 180;
  var elementPosition = element.getBoundingClientRect().top;
  if (window.innerWidth < 576) {
    headerOffset = 70;
  }
  else if(window.innerWidth < 992) {
      headerOffset = 117;
  }
  else if (window.innerWidth >= 1400) {
    headerOffset = 0;
  }

  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

function verMas() {
  let mostrar = document.getElementById("vermas").style.display;
  //console.log(document.getElementById("vermas").style.display)
  if (mostrar != "block" || mostrar == "null") {
    document.getElementById("vermas").style.display = "block";
    document.getElementById("btoVerMas").classList.remove("btn-outline-primary");
    document.getElementById("btoVerMas").classList.add("btn-outline-danger");
    document.getElementById("btoVerMas").innerHTML = "Ver menos";

    let clientHeight = document.getElementById('mail').clientHeight;
    //console.log(clientHeight + " en px")

  }
  else {
    document.getElementById("vermas").style.display = "none";
    document.getElementById("btoVerMas").classList.add("btn-outline-primary");
    document.getElementById("btoVerMas").classList.remove("btn-outline-danger");
    document.getElementById("btoVerMas").innerHTML = "Ver mas";

  }
}

const observe = new ResizeObserver(enrtries => {
  enrtries.forEach(element => {
    //console.log(element)

    const tamanio = element.contentRect.bottom + element.contentRect.top;
    if (tamanio > 24) {
      // console.log(tamanio)
      document.getElementById('titulo_' + element.target.id).style.height = tamanio + "px";
    }
    else {
      document.getElementById('titulo_' + element.target.id).style.height = tamanio + "px";

    }
  });
})
observe.observe(liNombre)
observe.observe(liNacimiento)
observe.observe(liPais)
observe.observe(liCiudad)
observe.observe(liCelular)
observe.observe(liTelefono)
observe.observe(liMail)
observe.observe(liCalle)


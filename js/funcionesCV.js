let myMediaQuery = window.matchMedia('(max-width: 600px)');
let myMediaQuery_1700px = window.matchMedia('(max-width: 1700px)');

$(document).ready(function(){

    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    console.log("tamo")
    let myMediaQuery_1700px = window.matchMedia('(max-width: 1800px)');

    //widthChangeCallback(myMediaQuery)
 });
// 
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function (data) {
    console.log(data);
    console.log(data.results[0]);
    //let json= Object.fromEntries(data.results[0].name.first);
    /*let json=JSON.stringify(data.results);
    console.log(json)*/
    document.getElementById('nombre').innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById('foto').src = data.results[0].picture.large
  }
});

//funcion para ver ajustar el nav segun el ancho de la pantalla
// function widthChangeCallback(myMediaQuery) {
//   console.log(myMediaQuery)
//   if(myMediaQuery.matches) {
//     document.getElementById("cont-nav").classList.remove("flex-column");
//     //document.getElementById("cont-nav").classList.add

//    // document.querySelector("p").textContent = "menos.";
//    } else {
//     document.getElementById("cont-nav").classList.add("flex-column");
//     // document.querySelector("p").textContent = "mas+++++";
//    }
// }
// myMediaQuery.addEventListener('change', widthChangeCallback);

function widthChangeCallback(myMediaQuery_1700px) {
    console.log(myMediaQuery_1700px)
    if(myMediaQuery_1700px.matches) {
      document.getElementById("carta").classList.remove("me-5");
      //document.getElementById("cont-nav").classList.add
  
     // document.querySelector("p").textContent = "menos.";
     } else {
      document.getElementById("carta").classList.add("me-5");
      // document.querySelector("p").textContent = "mas+++++";
     }
  }
  myMediaQuery_1700px.addEventListener('change', widthChangeCallback);
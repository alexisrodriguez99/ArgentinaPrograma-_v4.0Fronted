let myMediaQuery_Max1400px = window.matchMedia('(max-width: 1400px)');
let myMediaQuery_Entre1400Y1900px = window.matchMedia('(min-width: 1400px) and (max-width: 1900px)');

$(document).ready(function(){

    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    console.log("tamo")
    //myMediaQuery_1700px.addEventListener('change', widthChangeCallback);
  widthChangeCallback(myMediaQuery_Entre1400Y1900px);
    widthChangeCallbackMax1400px(myMediaQuery_Max1400px);
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

function widthChangeCallback(myMediaQuery_Entre1400Y1900px) {
    //console.log(myMediaQuery_Entre1400Y1900px)
    if(myMediaQuery_Entre1400Y1900px.matches) {
      // document.getElementById("carta").classList.remove("me-5");  
      // document.querySelector("p").textContent = "no tengo.";
      document.getElementById("carta").classList.add("me-5");
      //document.querySelector("p").textContent = "si tengo+++++";
     } else {
      // document.getElementById("carta").classList.add("me-5");
      // document.querySelector("p").textContent = "si tengo+++++";
      document.getElementById("carta").classList.remove("me-5");  
      //document.querySelector("p").textContent = "no tengo.";
     }
  }
  function widthChangeCallbackMax1400px(myMediaQuery_Max1400px) {
    console.log(myMediaQuery_Max1400px)
    if(myMediaQuery_Max1400px.matches) {
      // document.getElementById("carta").classList.remove("me-5");  
      // document.querySelector("p").textContent = "no tengo.";
      document.getElementById("nav-row").classList.add("container-fluid");
      //document.querySelector("p").textContent = "si tengo+++++";
      document.getElementById("div-nav").classList.add("sticky-top");
      document.getElementById("nav").classList.remove("sticky-top");

     } else {
      // document.getElementById("carta").classList.add("me-5");
      // document.querySelector("p").textContent = "si tengo+++++";
      document.getElementById("nav-row").classList.remove("container-fluid");  
      //document.querySelector("p").textContent = "no tengo.";
      document.getElementById("div-nav").classList.remove("sticky-top");
      document.getElementById("nav").classList.add("sticky-top");
     }
  }
  myMediaQuery_Entre1400Y1900px.addEventListener('change', widthChangeCallback);
  myMediaQuery_Max1400px.addEventListener('change', widthChangeCallbackMax1400px);
//1
const $titulo = document.getElementById(`titulo`)
//2
const tituloPrincipal = "Frutas"

$titulo.textContent = tituloPrincipal
//3
const $headerYFooter = document.querySelectorAll(".headerFooter")

for (let i of $headerYFooter){
    i.classList.add("bg-orange-500")
}

//4
const $pFooter = document.querySelector(`footer > p`)

$pFooter.textContent += " Matias Martinez Cohorte 53"

//5
// --------     Como crear un div dentro del main   --------
//  El innerHtml trabaja con strings, y el createElement crea un nodo
//  const $main = document.querySelector(`main`)   
//  const $div = document.createElement("div")      ---------> crea el elemento div
//  $div.setAttribute("id", "contenedor")           ---------> se le da un id a $div
//  $main.appendChild($div)                         ---------> "guarda" el $div en el $main

const $divContenedor = document.getElementById(`contenedor`)

//6
function crearCard(nombre, foto, descripcion){
    return `
    <article class="w-80 flex flex-col flex-wrap items-center border border-solid border-black border rounded p-4 mb-4 md:w-2/5 lg:w-1/5 lg:ml-10 lg:mr-10">
        <img class="h-44" src="${foto}" alt="${nombre}">
        <h2 class="mb-10 font-bold">${nombre}</h2>
        <p class="text-justify">${descripcion}</p>
    </article>
    `
}
// ---------- Esta funcion crea una carta ----------

//7
// console.log(crearCard(frutas[0].nombre, frutas[0].foto, frutas[0].descripcion))
//  for (let fruta of frutas){
//      console.log(crearCard(fruta.nombre, fruta.foto, fruta.descripcion))
// }

const articulosFrutas = frutas.map (fruta => crearCard(fruta.nombre, fruta.foto, fruta.descripcion))

//8
// function cargarCartasEnElDiv(){
// for (let fruta of articulosFrutas){
//         $divContenedor.innerHTML += fruta
//    }
// }
// cargarCartasEnElDiv()

// ---------- Esta forma es mucho mas eficiente que la de arriba, hace un solo innerHTML ----------

articulosFrutas.join(" ")                           /* Une el array con un espacio haciendolo string y permite que haga el innerHTML */ 
$divContenedor.innerHTML += articulosFrutas         /* con todas las frutas juntas en vez de con cada fruta separado  */

//9
const $divLista = document.getElementById(`lista`)

//10
const $listaDesordenada = document.createElement("ul")
function esDulce(array, condicion){
    if (condicion){
    return `
    <li class="list-disc text-center mb-2">${array}</li>
    `}
}

//11
const articulosLista = frutas.map (fruta => esDulce(fruta.nombre, fruta.esDulce)).join(" ")
$divLista.appendChild($listaDesordenada)
$listaDesordenada.innerHTML += articulosLista

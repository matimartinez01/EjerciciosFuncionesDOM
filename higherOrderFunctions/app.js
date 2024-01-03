//1
const printMessage = message => console.log(message)

//2
const multiplicacion = (num1, num2) => num1 * num2

//3
function multiplicacionArray(){
    const array = [ 1,2,3,4,5,6,7,8,9]
    const nuevoArray = array.map ((numero, i) => numero * array[i - 1])
    nuevoArray[0] = 0    
    console.log(nuevoArray)
}

//4
function cervezasMasAlcohol(){
    const cervezasOrdenadas = beers.toSorted((a,b) =>{
        if (a.abv > b.abv){
            return 1
        }
        if (a.abv < b.abv){
            return -1
        }
        else {
            return 0
        }
    } )
    return cervezasOrdenadas.slice(0,10)
}

//5
function cervezasMenosAmargas(){
    const cervezasOrdenadasAmargas = beers.toSorted((a,b) =>{
        if (a.ibu < b.ibu){
            return 1
        }
        if (a.ibu > b.ibu){
            return -1
        }
        else{
            return 0
        }
    } )
    return cervezasOrdenadasAmargas.slice(0,10)
}


//6
// function cervezaElegida(nombre){
//     const cerveza = beers.filter(beer => nombre == beer.name)
//     return cerveza
// }
const cervezaElegida = nombre => beers.filter(beer => nombre == beer.name)

//7
function cervezaIbuSeleccionado(ibu){
    const cervezaIbu = beers.find(cerveza => ibu == cerveza.ibu)
    if (!cervezaIbu){
        return `No hay una cerveza con el ibu seleccionado`
    }
    return cervezaIbu
}

//8
// function indiceDeCerveza(array, nombre){
//     let indice
//     array.map((a,b) => {
//         if(a.name === nombre){
//             indice = b
//         }
//     })
//     if(indice == undefined){
//         return `${nombre} no existe`
//     }
//     return indice
// }

function indiceDeCerveza2(array, nombre){
    const indiceDeCerv = array.findIndex(a => a.name == nombre)
    if (indiceDeCerv >= 0){
        return indiceDeCerv
    }
    else{
        return `No hay ninguna cerveza con el nombre ${nombre}`
    }
}

//9
function objetoCervezas(alcohol){
    const cervezasNoSuperanAlcohol = beers.filter(a => a.abv <= alcohol).map(a => {
        return {
        name: a.name,
        ibu: a.ibu,
        abv: a.abv}
})
    return cervezasNoSuperanAlcohol
}

//10
function cervezasOrdenadas(array, propiedad, ascendente){
     if (ascendente == true){
        const listaCervezas = array.toSorted((a,b) => {
            if (a[propiedad] > b[propiedad]){
                return 1
            }
            if (b[propiedad] > a[propiedad]){
            return -1
            }
            return 0
        })
        return listaCervezas.slice(0,10)
     }
     else{
        const listaCervezas = array.toSorted((a,b) => {
            if (a[propiedad] > b[propiedad]){
                return -1
            }
            if (b[propiedad] > a[propiedad]){
            return 1
            }
            return 0
        })
        return listaCervezas.slice(0,10) 
    }
}

//11

function tablaCervezas(array, id){
    const $tabla = document.createElement("table")
    const $almacenamiento = document.getElementById(id)
    $almacenamiento.appendChild($tabla)
    $tabla.innerHTML += `<tr> <th class="border-collapse border-solid border-black border">Nombre</th>
                        <th class="border-collapse border-solid border-black border">ABV</th>
                        <th class="border-collapse border-solid border-black border">IBU</th>
                        </tr>`
    
    function crearFila(nombre, abv, ibu){
        return `<tr>
        <th class="border-collapse border-solid border-black border">${nombre}</th>
        <th class="border-collapse border-solid border-black border">${abv}</th>
        <th class="border-collapse border-solid border-black border">${ibu}</th>
        </tr>`
    }
    
    const informacionDeTabla = array.map(a => crearFila(a.name, a.abv, a.ibu)).join(" ")
    $tabla.innerHTML += informacionDeTabla
}


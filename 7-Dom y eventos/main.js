
/* 
let contenedor = document.getElementById("container")


contenedor.innerHTML= "<h1>Hola mundo, bienvenidos</h1> <p>javier gimenez</p>"

 */
/* 
let parrafo = document.getElementsByTagName("p")
parrafo[2].innerHTML = "pochoclo"

console.log(parrafo[2].innerHTML) */


/* const parrafo= document.getElementById("miParrafo")


parrafo.remove()

console.log(parrafo) */
/* 



let producto = {id:12,nombre:"arroz", precio:456}
let contenedor = document.createElement("div")

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <h1> Producto: ${producto.nombre}</h1>
                        <b> precio: ${producto.precio} </b>`
document.body.appendChild(contenedor)


let plantilla = `ID: ${producto.id} - Producto ${producto.nombre} - Precio ${producto.precio}`

 */


//addEventListener()

//elemento.addEventListenner(evento, funcion)


/* 
let juego = document.getElementById("boton")

juego.addEventListener("mousemove", function(event){
    console.log("la mira esta en x: "+event.clientX+ " y: " + event.clientY)
})


juego.addEventListener("mousedown", ()=>console.log("tatatatatatatatatata"))
juego.addEventListener("mouseup", ()=>console.log("recarga"))
 */


let input = document.getElementById("inputFiel")

input.addEventListener("input", function(e){
console.log("el valor del campo es  " + e.target.value)
})
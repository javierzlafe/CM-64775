

/* 
producto
usuario cree el producto
dinamico

usuario debe eliminar producto
usuario debe modificar producto
filtrar producto

*/


const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto("lenovo", 3500000, 20)
let producto2 = new Producto("lenovo pad", 3500000, 20)
let producto3 = new Producto("macbook", 3500000, 20)
let producto4 = new Producto("apple pad", 3500000, 20)
let lista = [producto1,producto2,producto3,producto4]

function filtrarProducto(){
    let palabraClave = prompt("ingresa el producto que queres buescar").toUpperCase().trim()
    let resultado = lista.filter((x)=> x.nombre.toUpperCase().includes(palabraClave))
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia")
    }
}

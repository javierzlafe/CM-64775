

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


if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista
}





function filtrarProducto(){
    let palabraClave = prompt("ingresa el producto que queres buescar").toUpperCase().trim()
    let resultado = lista.filter((x)=> x.nombre.toUpperCase().includes(palabraClave))
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia")
    }
}


function agregarProducto(){
    Swal.fire({
        title: "agregar producto",
        html:`<label>Nombre:</label> <input id="nombre-input" class"swal2-input" type"text" autofocus>
              <label>Precio:</label> <input id="precio-input" class"swal2-input" type"number" step=0.01>
              <label>Stock:</label> <input id="stock-input" class"swal2-input" type"number" step=1>
                 `,
        showCancelButton: true,
        confirmButtonText: "agregar",
        cancelButtonText: "Cancelar"
    }).then( (result)=>{
        if(result.isConfirmed){
            let nombre= document.getElementById("nombre-input").value.trim();
            let precio= parseFloat(document.getElementById("precio-input").value);
            let stock= parseInt(document.getElementById("stock-input").value);

            if(isNaN(precio) || isNaN(stock) || nombre==""){
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text:"por favor ingresa datos validos"
                })
                return;
            }

            let producto = new Producto (nombre,precio,stock)

            if(lista.some(  (elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    icon:"warning",
                    title: "Advertencia",
                    text:"el producto ya existe en la lista"
                })
                return;
            }

            lista.push(producto)
            console.table(lista)

        }
    }  )
}

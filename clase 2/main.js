


/* function saludar(){
    let nombre = prompt("ingresa tu nombre")
    alert("bienvenido " +nombre)
}

 */





/* let resultado = 0;

function sumar(primerNumero, segundoNumero) {    
    let primerNumero = prompt("ingresa numero 1")
    let segundoNumero = prompt("ingresa numero 2")  
    resultado = primerNumero + segundoNumero
    alert(resultado)
}

 sumar()
  */

 

/* 
function declarada(){
    console.log("pochoclo")
}


let expresada= function(){console.log("banana")}
expresada()



function normal(){
    console.log("pochoclo")
}



 let suma = function(a,b){
    let resultado = a+b
    return resultado
 }


let funcioAnonima = function(a,b){
    return a+b
}


let funcionFlecha=(a,b,c,d)=>a+b


 console.log(funcionFlecha(2,7))   */



 const iva = 1.21
 function calcularIva(importe){
    if(parseFloat(importe)){
        let resultado = importe *iva
        alert("el importe final es: " + resultado)
    }
 }
 function calcularPrecioFinal(){
    let precioDelProducto = prompt("ingresa el importe a calcular")
    calcularIva(precioDelProducto)
 }
 calcularPrecioFinal()
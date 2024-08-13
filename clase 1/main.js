
                        //CLASE 2      CURSO JAVASCRIPT


//console.log(nombre.toLowerCase())  //MAYUSCULA
//console.log(nombre.toUpperCase())   //minuscula
//console.log(nombre.length)  //cantidad de caracteres




//CONDICIONALES 

/* "Un condicional es una estructura que nos permite tomar decisiones 
    en nuestro código. 


La estructura de un condicional se compone de tres partes: 
una condición, 
una acción si la condición es verdadera 
y una acción si la condición es falsa.


//VALORES BOOLEANOS 


//los buleanos se pueden poner de forma directa o tomar el valor mediante las condicionales

                    /* Por ejemplo, si queremos que el programa salude al usuario solo si 
                    su nombre es "Juan", se puede usar un condicional. 
                    La condición sería verificar si el nombre es igual a "malena". Si es verdadero, 
                    el programa muestra un saludo especial para malena. 
                    Si es falso, el programa puede mostrar un saludo general para cualquier otro nombre.

                            ejemplo

                    let nombre = prompt('Ingresa tu nombre');
                    if (nombre === 'malena') {
                    console.log('¡Hola, malena!');
                    } else {
                    console.log('¡Hola, amigo!');
                    } */



    //EJEMPLO DE IF


/* 
let num1 = 100
let num2 = 500 

let respuesta = (num1 > num2)
//let respuesta = (num1 = num2)  //aca no comparo, sino que asigno. para comparacion es ==
//esto es causa normal de errores

if (respuesta){
    console.log("num1 es menor a num2")
} */


        //IF ELSE  se puede usar el if solo, pero no se puede usar un else sin if



/* 
let nombre = prompt("ingresa tu nombre")

if(nombre=="luciano"){
    alert("bienvenido lucho de mi corazon")
}else if(nombre == "fausto"){
    alert("bienvenido fausto de mi vida")
}else{
 alert("no te conozco")
}
 */

        //EJEMPLO DE ELSE IF USANDO TODO LO APRENDIDO

      

/* console.log("vendo algo, escucho ofertas.")

let ofertabase = 2000
let ofertaDelUsuario = prompt("ingresa tu oferta:")
if (ofertaDelUsuario < 1000){
    console.error("olvidate, tu oferta es demaciado baja")
}else if(ofertaDelUsuario < 2000 && ofertaDelUsuario > 1000){
    console.warn("estirate un poco mas")
}else if(ofertaDelUsuario > 2000){
    console.log("oferta aceptada! ✅ te enviare un mensaje para coordinar el envio")
}else{
    console.log("tu oferta no se entendio")
} */







//OPERADORES LOGICOS  (AND-OR-NOT)  && || !

//BUSCAR EL GOOGLE LA TABLA DE LA VERDAD 


/* 
 */

/* if(numA < numB && numA < 1500){  //si uno solo da falso, ya no se cumple la sentencia
    console.log("esto nunca se va a mostrar")
}


if(numA < numB || numA < 1500){  //si se cumple una o la otra, se ejecuta
    console.log("esto si se va a mostrar porque una se cumple")
}

if(numA =! numB){    //para estar siempre seguro, usar ==! (estrictamente diferente)
    console.log("esto se muestra porque son diferentes")
} */


/* let correo = prompt("ingrese su correo")

if(correo =! "" ){ // si el ingreso NO ESTA VACIO (si es diferente a vacio), muestra el msj
    console.log("bienvenido ", correo)
}else{
    console.warn("ingresa un correo valido")
} */



/* ejemplo de CALCULADORA con if else 



let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  resultado = num1 / num2;
} else {
  console.log("Operación inválida");
}

console.log("El resultado es: " + resultado);*/




 
/* console.warn("mensaje alerta")
console.error("mensaje error")


 */



/* let num = parseInt(prompt("ingrese un numero"))

if(num >=10 && num<=20){
    alert("el numero esta entre 10 y 20")
}else{
    alert("no cumple con la consigna")
} */




/* let usuarioEdad = parseInt(prompt('ingresa tu Edad'))
if (usuarioEdad >= 18 || usuarioEdad < 65){
    alert('Puedes trabar aqui')
} else {
    alert('Lo siento no cumples con la condición')
}
 */



/* let numero1 = parseInt(prompt("ingrese el primer numero"))
let numero2 = parseInt(prompt("ingrese el segundo numero"))



if( numero1 % 2===0 && numero2 % 2===0){
    alert("ambos son pares")
}else{
    alert("al menos uno de los numeros es impar")
}
 */



/* let numero =  parseInt(prompt("ingresa un numero")) 


alert(numero) */


//AND - OR- NOT



/* let numA= "10"
let numB = 5


if((numA != NaN || numA > 2)&& (numB > 6) ){
    alert("no se va a mostrar")
}


NOT A NUMBER   ==  "10"
NOT A NUMBER != 5



 */



                    //  BUCLES

//ESTRUCTURA DEL FOR

//for(desde, hasta, incremento)



/* for(let i=0;i<=10;i++){
    console.log("estoy iterando con el for"+i)
}
 */






/* let iterar=true
while(iterar == true){
    console.log("imprimo en consola")
    iterar = confirm("desea seguir iterando?")
} */

/* let contador = 6

do{
    console.log("blablabla contando " + contador)
    contador++
}while(contador <5) */










/* let intentos = 3
let identificar = true
do{
    let usuario = prompt("ingresa tu usuario, (solo 3 intentos)")
    if(usuario == null){
        break
 
        alert("no se reconoce el usuario, te quedan" + intentos)
        intentos--
        if(intentos <1){
            alert("superaste los intentos")
            break
        }
    }
}while(identificar) */
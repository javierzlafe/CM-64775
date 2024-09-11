//setTimeout(()=>alert("asd"), 3000)




//setInterval(()=>console.log("tic"), 1000  )




/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click',

()=>{
    popup.classList.add('popup-active')

    setTimeout( ()=>{popup.classList.remove('popup-active')}, 2500)


}) */
/* 

let num = parseInt(prompt("ingresa los segundos a contar"))

let segundos = num*1000

let time = setInterval( 
    ()=>{
    const date = new Date();
    console.log(date.toLocaleTimeString())
},1000)


setTimeout( ()=>clearInterval(time),segundos)

 */


let url = "https://jsonplaceholder.typicode.com/posts/2"


fetch(url)

.then(response => response.json())
.then( data => console.log(data))
.catch(error=> console.error("exploto todo papa"))
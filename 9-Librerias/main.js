


let url = "https://pokeapi.co/api/v2/pokemon?limit=50"


const pokemonContainer= document.getElementById("pokemon-container")

fetch(url)
.then(response=>response.json())
.then( data=>{

    const pokemons = data.results;

    pokemons.forEach( (pokemon)=>{

        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData=>{
            const pokemonElement = document.createElement("div")
            pokemonElement.innerHTML= `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}">
            <p>Tipo:${pokemonData}</>
            `
            pokemonContainer.appendChild(pokemonElement)

        })
        .catch(error=>console.log("revento todo"))
    }    )
})

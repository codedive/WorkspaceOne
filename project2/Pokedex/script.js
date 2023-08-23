const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}


const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1) // slice1 means 1 ko chorke waha s age ka dekha do bcse 1 st leeter is capital
    const id = pokemon.id.toString().padStart(3, '0') //pad with 0  ,3 space pad with 0
     // console.log(poke_types)
     //when we console log we have an array some have 2 tpe some have one
     // they are object with type object with name value
    const poke_types = pokemon.types.map(type => type.type.name)
    //.map to create a new array so map we lop through and we will say
    //for each type i want to return the type which is an object
  

    // to get the actual type of current pokemon
    //so i just want to create an object that will be 0 for fire 1 for grass and so on
    // so  we have done this as main_types=object.keys(colors); jisme aab  0 will be fire and so on

    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    //greater than -1 one bcse if there is no match  index of this method right here return a - one
    const color = colors[type]

     pokemonEl.style.backgroundColor = color //bg depend upon type

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">#${name}</h3>
        <small class="type">Type:<span>${type}</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}


fetchPokemons()
// const userInput = document.querySelector("#pokemon-input");
// const pokemonId = userInputNode.value;
const url = `https://pokeapi.co/api/v2/pokemon/5/`

async function miniPokedex(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP Error:${response.status}`);
        }
        const pokemon = await response.json();
        console.log(pokemon);

        const { id, name, types, sprites:{front_default} } = pokemon;
 
        let type1 = types[0].type.name;
        let type2 = types.length > 1 ? types[1].type.name : null; //checks if pokemon has only one type
        console.log(id);
        console.log(name);
        console.log(type1);
        console.log(type2);
        console.log(front_default); //pokemon sprite
        
        const pokemonInfo = [];
        pokemonInfo.push(id, name, type1, type2, front_default);
        return pokemonInfo

    } catch (error){
        console.error(error);
    }
}

miniPokedex();

async function displayPokemon(){
    const pokemonInfo = await miniPokedex();
    
    
}
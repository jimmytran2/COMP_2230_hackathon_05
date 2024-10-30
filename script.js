// const userInputNode = document.querySelector("#userInput");
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

        const { id, name, types } = pokemon;
 
        let type1 = types[0].type.name;
        let type2 = types.length > 1 ? types[1].type.name : null;
        console.log(id);
        console.log(name);
        console.log(type1);
        console.log(type2);

    } catch (error){
        console.error(error);
    }
}

miniPokedex();
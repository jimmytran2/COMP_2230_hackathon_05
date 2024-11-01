const userInputNode = document.querySelector("#pokemon-input");
const spriteContainer = document.querySelector("#sprite");
const infoNode = document.querySelector("#info");



async function miniPokedex(){
    const pokemonId = userInputNode.value;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP Error:${response.status}`);
        }
        const pokemon = await response.json();
        console.log(pokemon);

        const { id, name, types, sprites:{front_default} } = pokemon;
 
        let type1 = types[0].type.name;
        let type2 = types.length > 1 ? types[1].type.name : null;
        console.log(id);
        console.log(name);
        console.log(type1);
        console.log(type2);
        console.log(front_default);
        
        const pokemonInfo = [];
        pokemonInfo.push(id, name, type1, type2, front_default);
        return pokemonInfo

    } catch (error){
        console.error(error);
    }
}

// miniPokedex();

async function displayPokemon(){

    spriteContainer.textContent = "";
    infoNode.textContent = "";

    const pokemonInfo = await miniPokedex();
    const [id, name, type1, type2, front_default] = pokemonInfo;

    const photoNode = document.createElement("img");
    photoNode.src = front_default;
    spriteContainer.appendChild(photoNode);

    const pokeId = document.createElement("p");
    pokeId.textContent = `Pokedex Entry #${id};`
    infoNode.appendChild(pokeId);

    const nameId = document.createElement("p");
    nameId.textContent = name
    infoNode.appendChild(nameId);

    const typeId1 = document.createElement("p");
    typeId1.textContent = `Type: ${type1}`
    infoNode.appendChild(typeId1);

    const typeId2 = document.createElement("p");
    typeId2.textContent = `Type: ${type2}`
    infoNode.appendChild(typeId2);

    console.log(pokemonInfo);


}
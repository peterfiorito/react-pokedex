import axios from 'axios';

export async function allPokemons() {
    let data;
    await axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            data = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        });
    return data;
}

export async function requestPokemon(url) {
    let pokemon;
    await axios.get(url)
        .then((response) => {
            pokemon = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return pokemon;
}

import types from '../constants/actionTypes';

import newState from '../helpers/newState';

const input = {
    tool: null,
    pokemonList: [],
    selectedPokemon: [],
};

export default function sidebar(state = input, action) {
    switch (action.type) {
    case types.MAIN_POKEMON_CALL: {
        return newState(state, { pokemonList: action.list });
    }
    case types.POKEMON_DETAILS: {
        return newState(state, { selectedPokemon: [action.details] });
    }

    default:
        return state;
    }
}

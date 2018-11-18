import types from '../constants/actionTypes';

export const switchTool = tool => ({ type: types.SWITCH_TOOL, tool });
export const pokemonUpdateList = list => ({ type: types.MAIN_POKEMON_CALL, list });
export const pokemonUpdateQueryPokemon = details => ({ type: types.POKEMON_DETAILS, details });

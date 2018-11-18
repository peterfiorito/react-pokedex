import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from './PureComponent';

class PokemonDetails extends PureComponent {
    render() {
        return (
            <div className="pokedex">
                <div className="pokedex--main-info">
                    <div className="details">
                        <p>name: {this.props.selectedPokemon[0].name}</p>
                        <p>base experience: {this.props.selectedPokemon[0].base_experience}</p>
                    </div>
                    <div className="photo">
                        <img src={this.props.selectedPokemon[0].sprites.front_default} alt="pokemon_profile" />
                    </div>
                </div>
            </div>
        );
    }
}

PokemonDetails.defaultProps = {
    selectedPokemon: [],
};

PokemonDetails.propTypes = {
    selectedPokemon: PropTypes.instanceOf(Array),
};

export default PokemonDetails;

import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from './PureComponent';

class PokemonStats extends PureComponent {
    render() {
        return (
            <div className="pokemon-stats">
                <div className="pokemon-stats--info">
                    <div className="abilities">
                        <p>Abilities</p>
                        <ul>{this.props.selectedPokemon[0].abilities.map((x) => {
                            return (<li key={x.ability.name}>{x.ability.name}</li>);
                        })}
                        </ul>
                    </div>
                    <div className="type">
                        <p>Type</p>
                        <ul>{this.props.selectedPokemon[0].types.map((x) => {
                            return (<li key={x.type.name}>{x.type.name}</li>);
                        })}
                        </ul>
                    </div>
                </div>
                <div className="pokemon-stats--info">
                    <div className="moves">
                        <p>Moves</p>
                        <ul>{this.props.selectedPokemon[0].moves.map((x) => {
                            return (<li key={x.move.name}>{x.move.name}</li>);
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

PokemonStats.defaultProps = {
    selectedPokemon: [],
};

PokemonStats.propTypes = {
    selectedPokemon: PropTypes.instanceOf(Array),
};

export default PokemonStats;

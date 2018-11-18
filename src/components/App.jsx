import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allPokemons, requestPokemon } from '../webApi/generalApiCalls';
import { pokemonUpdateList, pokemonUpdateQueryPokemon } from '../actions/workshop';
import PureComponent from './PureComponent';
import PokemonDetails from './PokemonDetails';
import PokemonStats from './PokemonStats';

class App extends PureComponent {
    componentWillMount() {
        this.mainCall();
    }

    async mainCall() {
        const data = await allPokemons();
        this.props.pokemonUpdateList(data);
        return data;
    }
    async goToPokemon(url) {
        const data = await requestPokemon(url);
        this.props.pokemonUpdateQueryPokemon(data);
    }

    render() {
        return (
            <div className="main">
                <h1>PokeDex</h1>
                <div className="pokedex">
                    <div className="pokemon-list">
                        <ul>
                            {this.props.pokemonList.map((x) => {
                                return (
                                    <li key={x.name}>
                                        {x.name}
                                        <button onClick={this.goToPokemon.bind(this, x.url)}>Details</button>
                                    </li>);
                            })}
                        </ul>
                    </div>
                    <div className="pokemon-details">
                        {this.props.selectedPokemon.length > 0 &&
                            <PokemonDetails selectedPokemon={this.props.selectedPokemon} />
                        }
                        {this.props.selectedPokemon.length > 0 &&
                            <PokemonStats selectedPokemon={this.props.selectedPokemon} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    pokemonList: [],
    selectedPokemon: [],
};

App.propTypes = {
    pokemonList: PropTypes.instanceOf(Array),
    selectedPokemon: PropTypes.instanceOf(Array),
    pokemonUpdateList: PropTypes.func.isRequired,
    pokemonUpdateQueryPokemon: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ pokemonUpdateList, pokemonUpdateQueryPokemon }, dispatch)
);

const mapStateToProps = state => ({
    pokemonList: state.workshop.pokemonList,
    selectedPokemon: state.workshop.selectedPokemon,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

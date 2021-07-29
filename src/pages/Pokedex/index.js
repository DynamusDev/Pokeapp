import { useState } from 'react';
import { Header } from '../../components/Header.js';
import { PokemonModal } from '../../components/PokemonModal'
import { useApp } from '../../_context/appContext';

import styles from './styles.module.scss';

export function Pokedex() {
  const { pokemonsList, getNextPokemons, getPreviousPokemons, getPokemon } = useApp();
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const [showModal, setShowModal] = useState(false);

  async function handleGetPokemon(name) {
    try {
      const pokemon = await getPokemon(name);

      if(pokemon) {
        setShowModal(true)
        setSelectedPokemon(pokemon)
      }
    }catch(err) {
      console.error(err)
    }
  }
  
  return(
    <div className={styles.container}>
      <Header actualPage='pokedex' />
      <PokemonModal isOpen={showModal} data={selectedPokemon} onRequestClose={() => setShowModal(false)} />
      <div className={styles.content}>
        <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>

        <input type="text" />

        <ul className={styles.pokemonsContainer}>
          {
            pokemonsList.results?.map(item => (
              <li key={item.index} onClick={() => handleGetPokemon(item.name)}>
                <h1> {item.name} </h1>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
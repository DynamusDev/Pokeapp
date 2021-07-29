import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
const Context = createContext({});

export function AppContextProvider({ children }) {
  const [pokemonsList, setPokemosList] = useState({});
  const [screenSize, setScreenSize] = useState(null);

  function handleResize() {
    if(window.innerWidth <= 575) return setScreenSize('mobile');
    if(window.innerWidth <= 768) return setScreenSize('tablet');
    if(window.innerWidth > 768) return setScreenSize('desktop');
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize()
  }, []);

  async function getPokemon(name) {
    const { data } = await api.get(`pokemon/${name}`)

    return data;
  };

  async function listPokemons() {
     await api.get('pokemon')
      .then(response => setPokemosList(response.data));
  };

  useEffect(() => {
    listPokemons();
  }, []);

  async function getNextPokemons(next) {
    await api.get(next)
      .then(response => setPokemosList(response.data));
  };

  async function getPreviousPokemons(previous) {
    await api.get(previous)
      .then(response => setPokemosList(response.data));
  };

	return <Context.Provider value={{ screenSize, pokemonsList, getNextPokemons, getPreviousPokemons, getPokemon }}>{children}</Context.Provider>;
}

export function useApp() {
	const context = useContext(Context);
	return context;
}
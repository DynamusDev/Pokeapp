import styles from './styles.module.scss';
import { Header } from '../../components/Header.js';
import {ReactComponent as Pikachu} from '../../assets/icons/pikachu.svg';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();
  return(
    <div className={styles.container}>
      <Header actualPage='home' />
      <div className={styles.content}>
        <Pikachu />
        <div className={styles.apresentationContainer}>
          <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>

          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>

          <button onClick={() => history.push('/pokedex')}>See Pokemons</button>
        </div>
      </div>
    </div>
  );
}
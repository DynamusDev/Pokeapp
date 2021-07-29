import styles from './styles.module.scss';
import {ReactComponent as PokeLogo} from '../../assets/icons/logo.svg';
import {ReactComponent as Menu} from '../../assets/icons/menu.svg';
import { useApp } from '../../_context/appContext'

export function Header({actualPage}) {
  const { screenSize } = useApp();
  return(
    <div className={styles.headerContainer}>
      <PokeLogo />

      {
        screenSize === 'mobile' ? 
          <Menu /> : 
          <nav>
            <a href='/' className={actualPage === 'home' ? styles.anchorActivated : styles.anchorDesactivated}>Home</a>
            <a href='/pokedex' className={actualPage === 'pokedex' ? styles.anchorActivated : styles.anchorDesactivated}>Pokédex</a>
            <a href='/legendaries' className={actualPage === 'legendaries' ? styles.anchorActivated : styles.anchorDesactivated}>Legendaries</a>
            <a href='/documentation' className={actualPage === 'documentation' ? styles.anchorActivated : styles.anchorDesactivated}>Documentation</a>
          </nav>
      }
    </div>
  );
}